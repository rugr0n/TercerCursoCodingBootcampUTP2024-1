import React, { useState, useEffect, useCallback } from "react";
import "../../src/App.css";

const CatFacts = () => {
  const [fact, setFact] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [firstLetter, setFirstLetter] = useState("");

  const fetchCatFact = useCallback(async () => {
    try {
      const factResponse = await fetch("https://catfact.ninja/fact");
      if (!factResponse.ok) {
        throw new Error("Network response was not ok");
      }
      const factData = await factResponse.json();
      const firstWord = factData.fact.split(" ")[0];
      setFact(factData.fact);
      setFirstLetter(factData.fact.charAt(0)); // Obtiene la primera letra de la frase
      fetchCatImage(firstWord);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
      setFact("Could not fetch cat fact. Please try again.");
    }
  }, []);

  useEffect(() => {
    fetchCatFact();
  }, [fetchCatFact]);

  const fetchCatImage = async (word) => {
    try {
      const imageResponse = await fetch(
        `https://api.thecatapi.com/v1/images/search?size=full`
      );
      if (!imageResponse.ok) {
        throw new Error("Network response was not ok");
      }
      const imageData = await imageResponse.json();
      setImageUrl(imageData[0].url);
    } catch (error) {
      console.error("Error fetching cat image:", error);
      setImageUrl("");
    }
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <h1>Cat Facts</h1>
      </nav>
      <div className="content">
        <h1 className="fact">{fact}</h1>
        {imageUrl && (
          <div className="image-container">
            <img src={imageUrl} alt="Cat" />
            <div className="overlay-text">{firstLetter}</div>
          </div>
        )}
        <button onClick={fetchCatFact} className="change-fact-button">
          Change Fact
        </button>
      </div>
    </div>
  );
};

export default CatFacts;