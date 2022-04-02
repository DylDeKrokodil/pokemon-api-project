import { Link, Outlet } from "react-router-dom";
import { GetPokemons } from "../data";

export default function Pokedex(){
    let pokemons = GetPokemons();
    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                borderRight: "solid 1px",
                padding: "1rem",
                }}
            >
                {pokemons.map((pokemon) => (
                <Link
                    style={{ display: "block", margin: "1rem 0" }}
                    to={`/pokedex/${pokemon.dex}`}
                    key={pokemon.dex}
                >
                    {pokemon.name}
                </Link>
                ))}
            </nav>
            <Outlet />
        </div>          
    );
}