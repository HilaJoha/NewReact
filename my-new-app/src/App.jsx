import { useEffect } from "react";
import React, { useState } from 'react';
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';
import './App.css';

function App() {

  useEffect(
    () => {
      alert("hello pokemon trainer :)");
    },
    []
  );


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
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pokemonList.length - 1 : prevIndex - 1));
    window.alert('Hello Pokemon Trainer!');
  }

  function handleNext() {
    setCurrentIndex((prevIndex) => (prevIndex === pokemonList.length - 1 ? 0 : prevIndex + 1));
    if (pokemonList[currentIndex].name === 'pikachu') {
      window.alert('Pika Pikachu!!!');
    }
  }

  useEffect(() => {
    if (pokemonList[currentIndex].name === 'pikachu') {
      const delay = 100; // Délai de 0,1 secondes (100 millisecondes)
      const timeoutId = setTimeout(() => {
        alert('pika pikachu !!!');
      }, delay);

      return () => {
        clearTimeout(timeoutId); // Nettoie le timeout lorsque le composant est démonté ou lorsque l'index change
      };
    }
  }, [currentIndex]);


  return (
    <div>
      <PokemonCard pokemon={pokemonList[currentIndex]} />
      <NavBar handlePrevious={handlePrevious} handleNext={handleNext} />
    </div>
  );
}

export default App;