import PropTypes from "prop-types";
import './PokemonCard.css';

function PokemonCard(props) {

    return (
      <figure className="card">
        {props.pokemon.imgSrc != null ? <img src={props.pokemon.imgSrc} alt={props.pokemon.name} className="pokemon-image" /> : <p>????</p>} <figcaption>{props.pokemon.name}</figcaption>
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
  

  