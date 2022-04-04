import { useEffect, useState } from "react";
import PokemonLink from "../PokemonLink";
import '../css/pokemon-link.css'


let LIMIT = 50;
let OFFSET = 0;
const URL = `https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}&limit=${LIMIT}`;

const Pokedex = () => {
    const [pokemonData, setPokemonData] = useState([]);

    const getPokemon = async () => {
        const response = await fetch(`${URL}`);
        const data = await response.json();

        // console.log(data.results);
        setPokemonData(data.results);
    }
    useEffect(() => {
        getPokemon();
    },[])

    const Next = () => {
        const [next, setNext] = useState({});

        const getUrl = async () => {
            const response = await fetch(`${URL}`);
            const data = await response.json();

            console.log(data.next);
            setNext(data.next);
        }
        getUrl();
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
                <button onClick={Next}>Load More</button>
            </div>
        </main>
    )
}

export default Pokedex;