import { useEffect, useState } from "react";
import PokemonLink from "../PokemonLink";

const Pokedex = () => {
    const [count, setCount] = useState();
    const [nextUrl, setNextUrl] = useState(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=50`);
    const [previousUrl, setPreviousUrl] = useState(null);
    const [pokemonData, setPokemonData] = useState([]);

    const getPokemon = async () => {
        const response = await fetch(`${nextUrl}`);
        const data = await response.json();
        
        setNextUrl(data.next);
        setPreviousUrl(data.previous);
        setCount(data.count);
        setPokemonData(data.results);

    }
    useEffect(() => {
        getPokemon();
    },[])
    
    const getNext = () => {
        if(nextUrl == null){
            alert(`There is no more pokemon to display`);
        } else {
            getPokemon();
        }
    } 

    return (
        <main>
            <div className="container-fluid">
                {
                    pokemonData?.length > 0 ? (
                        <div className="row">
                            {pokemonData.map((pokemon) => (
                                <PokemonLink key={pokemon.name} pokemon={pokemon}/>
                            ))}
                        </div>
                    ) : (
                        <div className="empty"><h1>No pokemon found!</h1></div>
                    )
                }
                <button onClick={getNext}>Get Next Pokemon</button>
            </div>
        </main>
    )
}

export default Pokedex;