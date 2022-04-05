import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokemonLink = ({ pokemon }) => {

    const pokemonUrl = pokemon.url
    const [pokemonImage, setPokemonImage] = useState();

    const getPokemonImage = async () => {
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        setPokemonImage(data.sprites.front_default);
    }
    useEffect(() => {
        getPokemonImage();
    },[])

    return(
        <div className="col-xl-2 col-md-3 col-4">
            <div className="pokemon-outer">
                <div className="row">
                    <div className="col-xl-6 col-md-12 col-12">
                        <div className="valign">
                            <Link to={pokemon.name}>{pokemon.name}</Link>   
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12 col-12">
                        <img src={pokemonImage}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonLink;