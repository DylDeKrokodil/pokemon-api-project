import { NavLink, Outlet } from 'react-router-dom';

const App = () => {

    return (
        <>
            <nav className='pokemon-menu'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xl-3 col-md-2 col-2'>
                            <NavLink to="/">
                                <img src="#" alt="Logo"></img>
                            </NavLink>
                        </div>
                        <div className='col-xl-9 col-md-10 col-10 text-end'>
                            <div className='text-end valign'>
                                <ul className='menu'>
                                    <li className='menu-item'>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li className='menu-item'>
                                        <NavLink to="/pokedex">Pokedex</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>      
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
      );
}

export default App;