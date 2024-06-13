import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        const charactersData = response.data.results.slice(0, 10);

        const charactersWithAlterEgos = await Promise.all(
          charactersData.map(async character => {
            const alterEgoImage = await fetchAlterEgoImage(character.name, character.id);
            return {
              ...character,
              alterEgoImage
            };
          })
        );

        setCharacters(charactersWithAlterEgos);
      } catch (error) {
        setError('Error fetching data from API');
      }
    };

    const fetchAlterEgoImage = async (name, id) => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(name)}`);
        const data = response.data;

        if (!data.results.length) throw new Error("No characters found");

        // Exclude the current character from alter ego options
        const alterEgoOptions = data.results.filter(result => result.id !== id);

        // Randomly select a character from alter ego options
        const randomIndex = Math.floor(Math.random() * alterEgoOptions.length);
        const alterEgo = alterEgoOptions[randomIndex];
        
        return alterEgo ? alterEgo.image : null;
      } catch (error) {
        console.log(error);
        return null;
      }
    };

    fetchCharacters();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="character-list">
      <h1>Rick and Morty Characters</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CharacterList;
