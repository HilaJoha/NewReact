import { useEffect, useState } from "react";
import React from 'react';
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  useEffect(() => {
    alert("Hello, Pokemon trainer!");
  }, []);

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (pokemonList[currentIndex].name === "pikachu") {
      const delay = 100;
      const timeoutId = setTimeout(() => {
        alert("Pika Pikachu!!!");
      }, delay);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [currentIndex, pokemonList]);

  return (
    <div>
      <PokemonCard pokemon={pokemonList[currentIndex]} />
      <NavBar
        pokemonList={pokemonList}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}

export default App;
