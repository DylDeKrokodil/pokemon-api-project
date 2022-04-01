import { useParams } from "react-router-dom";
import { GetPokemon } from "../data";

export default function Pokemon() {
    let params = useParams();
    let pokemon = GetPokemon(parseInt(params.dexId, 10));
    return (
        <section className="pokemon-single">
            <h1>{pokemon.name}</h1>
            <p>Type(s): {pokemon.type}</p>    
        </section>
    ) 
}