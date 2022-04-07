import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
    const capitalize = (s) => {
        if(typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const { pokemonId } = useParams();

    const [pokemonName, setPokemonName] = useState();
    const [pokemonStats, setPokemonStats] = useState();
    const [pokemonTypes, setPokemonTypes] = useState();


    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`

    

    const getPokemonDetail = async () => {
        const response = await fetch(`${url}`);
        const data = await response.json();
        let nameUpper = data.name;
        nameUpper = capitalize(nameUpper);

        setPokemonName(nameUpper);
        setPokemonTypes(data.types);
        setPokemonStats(data.stats);
        console.log(pokemonTypes);
    }

    useEffect(() => {
        getPokemonDetail();
    },[]);
    
    let gradientTypes = [];
    
    return (
        <main className="pokemon-detail">
            <div className="container-fluid">
                <div className="row">
                    
                    <h1 className={`i`}>{pokemonName}</h1>
                    {  
                        pokemonTypes?.length > 0 ? (
                            <div className="col-xl-6 col-md-6 col-12">
                                <ul>
                                {pokemonTypes.map((types) => (
                                    <li className={"color-" + types.type.name} key={types.type.name}>
                                        {types.type.name}
                                    </li>
                                ))}
                                </ul>
                            </div>
                        ) : (
                            <div className="empty"><h1>No types found!</h1></div>
                        )
                    }

                    {
                        pokemonStats?.length > 0 ? (
                            <div className="col-xl-12 col-md-6 col-12">
                                <ul>
                                {pokemonStats.map((stats) => (
                                    <li key={stats.stat.name}>
                                        {stats.stat.name}: {stats.base_stat}
                                    </li>
                                ))}
                                </ul>
                            </div>
                        ) : (
                            <div className="empty"><h1>No stats found!</h1></div>
                        )
                    }
                </div>
            </div>
        </main>
    );
}
export default PokemonDetail;