import { Link } from "react-router-dom";
import './css/main.css'
import './css/header.css'

export default function App() {
  return (
    <nav className='navbar'>
        <div className='container-fluid'>
            <div className='navbar-container'>
                <div className='navbar-logo'>
                    <Link to="/">
                      <img src="#" alt="Logo"></img>
                    </Link>
                </div>
                <div className='navbar-content'>
                    <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/pokedex">Pokedex</Link>
                        </li>
                    </ul>
                </div>      
            </div>
        </div>
    </nav>
  );
}