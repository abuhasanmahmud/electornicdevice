import { Button } from 'bootstrap';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';



const Header = () => {
    const {user,logOut}=useAuth()
    return (
        <div className="p-5">
            
            <div className="header">
             
            {/* <img className="logo" src={logo} alt="" /> */}
           
            <nav>
                 <NavLink to="/home">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                {
                    user.email ?
                        <button onClick={logOut}>log out</button>
                        :
                        <NavLink to="/login">Login</NavLink>}
            </nav>
        </div>
        </div>
    );
};

export default Header;