import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

const NavBar = () => {
    return (
        <div >
            <Menu size='large'>
                <Menu.Item>
                    <Icon name="gift" />
                    Dear Santa
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/" exact style={{ color: 'green' }} activeStyle={{ background: 'red', color: 'white' }}>Home</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/about" exact style={{ color: 'green' }} activeStyle={{ background: 'red', color: 'white' }}>About</NavLink>
                </Menu.Item>
            </Menu>
            
        </div>
    );
};
export default NavBar;