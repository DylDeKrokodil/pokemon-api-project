import { Link } from "react-router-dom";

const PokemonLink = ({ pokemon }) => {
    return(
        <div className="col-xl-2 col-md-3 col-4"><Link to="#">{pokemon.name}</Link></div>
    )
}

export default PokemonLink;