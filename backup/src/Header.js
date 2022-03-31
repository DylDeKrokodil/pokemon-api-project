import React from 'react'
import './css/header.css'

export default function Header() {
  return (
    <nav className='navbar'>
        <div className='container-fluid'>
            <div className='navbar-container'>
                <div className='navbar-logo'>
                    <a href='#'><img src='#'></img></a>
                </div>
                <div className='navbar-content'>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>Pokedex</a>
                        </li>
                    </ul>
                </div>      
            </div>
        </div>
    </nav>
  )
}
