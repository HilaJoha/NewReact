const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

  
function PokemonCard(props) {
  const pokemon = pokemonList[1];
  console.log(props)

    return (
      <figure>
        {pokemon.imgSrc != null ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>????</p>} <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
  }
   
  export default PokemonCard;

  

  