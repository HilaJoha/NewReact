import PropTypes from "prop-types";
function PokemonCard(props) {

    return (
      <figure>
        {props.pokemon.imgSrc != null ? <img src={props.pokemon.imgSrc} alt={props.pokemon.name} /> : <p>????</p>} <figcaption>{props.pokemon.name}</figcaption>
      </figure>
    );
  }


  PokemonCard.propTypes = {
    props: PropTypes.shape({
     name: PropTypes.string.isRequired,
     imgSrc: PropTypes.string,
    }).isRequired,
  }

    
  export default PokemonCard;
  

  