import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

const NavBar = () => {
    return (
        <div >
            <Menu color='green' size="small" inverted icon >
                <Menu.Item>
                    <NavLink to="/" exact style={{ color: 'white' }} activeStyle={{ fontWeight: "bold", color: 'white' }}> <Icon name="home" /></NavLink>
                </Menu.Item>
                <Menu.Item>
                   
                    <NavLink to="/about" exact style={{ color: 'white' }} activeStyle={{ fontWeight: "bold", color: 'white' }}>  <Icon name="info" /> </NavLink>
                </Menu.Item>
            </Menu>
            
        </div>
    );
};
export default NavBar;