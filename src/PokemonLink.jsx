import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokemonLink = ({ pokemon }) => {

    const pokemonUrl = pokemon.url
    const [pokemonImage, setPokemonImage] = useState();
    const [pokemonId, setPokemonId] = useState();
    
    const getPokemonData = async () => {
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        setPokemonImage(data.sprites.other.home.front_default);
        setPokemonId(data.id);
    }
    useEffect(() => {
        getPokemonData();
    })

    return(
        <div className="col-xl-3 col-md-3 col-6">
            <a href={`/pokedex/${pokemonId}`}>
                <div className="pokemon-outer">
                    <div className="row">
                        <div className="col-xl-6 col-md-12 col-12 text-center">
                            <img className="pokemon-image" alt={pokemon.name} src={pokemonImage}></img>
                        </div>
                        <div className="col-xl-6 col-md-12 col-12">
                            <div className="valign text-center">
                                {pokemon.name} 
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default PokemonLink;