import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <tr className="character-card">
      <td className="character-name">{character.name}</td>
      <td className="character-images">
        <div className="image-container">
          <img src={character.image} alt={character.name} />
          <img src={character.alterEgoImage} alt={character.name} />
        </div>
      </td>
    </tr>
  );
};

export default CharacterCard;
