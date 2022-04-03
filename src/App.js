import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'; 
// 1c6b4ec4

//const API_URL = 'https://www.omdbapi.com?apikey=1c6b4ec4';
const URL = 'https://pokeapi.co/api/v2/pokemon'


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async () => {
        const response = await fetch(`${URL}`);
        const data = await response.json();
        
        console.log(data.results);
        setMovies(data.results);

    }
    
    useEffect(() => {
        searchMovies();
    },[])

    return(
        <div className="app">
            <h1>Pokedex</h1>
            <div className="search">
                <input 
                    placeholder="Search for movies" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value) }
                />
                <img 
                    src={SearchIcon} 
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
            movies?.length > 0
                ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ) )}
                </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;