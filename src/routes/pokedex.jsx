import { useEffect, useState } from "react";
import PokemonLink from "../PokemonLink";

const Pokedex = () => {
    let currentUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=50`;
    const [nextUrl, setNextUrl] = useState();
    const [previousUrl, setPreviousUrl] = useState(null);
    const [pokemonList, setPokemonList] = useState([]);

    const getPokemon = async () => {
        const response = await fetch(`${currentUrl}`);
        const data = await response.json();
        
        setNextUrl(data.next);
        setPreviousUrl(data.previous);
        setPokemonList(data.results);

    }
    useEffect(() => {
        getPokemon();
    },[])
    
    const getNext = () => {
        if(nextUrl == null){
            alert(`There is no more pokemon to display`);
        } 
        currentUrl = nextUrl;
        getPokemon();
    }
    const getPrevious = () => {
        if(previousUrl == null){
            alert(`There is no more pokemon to display`);
        }
        currentUrl = previousUrl;
        getPokemon();
    }

    return (
        <main className="pokedex">
            <div className="container-fluid">
                <a className="button button-next bouncy" onClick={getNext}/>
                <a className="button button-previous bouncy" onClick={getPrevious}/>

                {
                    pokemonList?.length > 0 ? (
                        <div className="row">
                            {pokemonList.map((pokemon) => (
                                <PokemonLink key={pokemon.name} pokemon={pokemon}/>
                            ))}
                        </div>
                    ) : (
                        <div className="empty"><h1>No pokemon found!</h1></div>
                    )
                }
            </div>
        </main>
    )
}

export default Pokedex;