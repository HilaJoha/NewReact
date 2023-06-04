import PropTypes from "prop-types";
import React from "react";

function NavBar({ pokemonList, currentIndex, setCurrentIndex }) {
  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
};

export default NavBar;
