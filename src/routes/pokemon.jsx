import { useParams } from "react-router-dom";
import { GetPokemon } from "../data";

export default function Pokemon() {
    let params = useParams();
    let pokemon = GetPokemon(parseInt(params.dexId, 10));
    let typeList = [];
    return (
        <section className="pokemon-single">
            <h1>{pokemon.name}</h1>
            {pokemon.types.map((types) => (
                <>
                    {typeList.push(types.type)}
                </>
            ))}
            <p>Type(s): {typeList.toString().replace(",", " + ")}</p>
        </section>
    )
}