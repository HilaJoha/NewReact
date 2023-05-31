// App.jsx

import React, { useState } from 'react';
import PokemonCard from './components/PokemonCard';
import './App.css';

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  
  function handlePrevious() {
    setCurrentIndex(function(prevIndex) {
      return prevIndex === 0 ? pokemonList.length - 1 : prevIndex - 1;
    });
  }

  function handleNext() {
    setCurrentIndex(function(prevIndex) {
      return prevIndex === pokemonList.length - 1 ? 0 : prevIndex + 1;
    });
  }

  return (
    <div>
      <PokemonCard pokemon={pokemonList[currentIndex]} />
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
