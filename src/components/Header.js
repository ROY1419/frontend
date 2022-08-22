import React, { useState } from 'react'
import { NavLink, useNavigate, useNavigationType } from 'react-router-dom';

const Header = () => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const navigate = useNavigate();


    return (
        <nav className='navbar navbar-expend-lg navbar-light bg-light top-fixed'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='='>
                    Major Project

                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className='navbar-toggle-icon' />
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportContent'>
                    <ul className='navbar-nav me-auto mb-2'>
                        <li className='nav-item'>
                            <NavLink className="nav-link" aria-current="page" to="/admin" >
                                Admin
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className="nav-link" aria-current="page" to="/main" >
                                Main
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className="nav-link" aria-current="page" to="/user" >
                                User
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Header;