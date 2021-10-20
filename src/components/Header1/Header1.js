import React from 'react';
import useAuth from './../../hooks/useAuth';
import { Navbar, Container,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';

const Header1 = () => {
    const {user,logOut}=useAuth();
    return (
        <div>
            <h1>header 1</h1>
               <div className="bg-success">
                 <img className="img-fluid" src="https://i.ibb.co/ZzzdDtw/theme-logo-dark-1.png" alt=""/>
             </div>

        </div>
    );
};

export default Header1;