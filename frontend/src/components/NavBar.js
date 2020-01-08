import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to="/funds" exact activeStyle={{ background: 'darkblue' }}>Funds</NavLink>
            <NavLink to="/gifts" activeStyle={{ background: 'darkblue' }}>Gift List</NavLink>
            
        </div>
    );
};

export default NavBar;