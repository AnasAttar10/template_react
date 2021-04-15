import React from 'react';
import '../nav/nav.css';
import { NavLink } from "react-router-dom";

const Nav =()=>{
    return (
        <div className="nav1">
            <div className="container nav">
             <span><a className="logo" href="#">ATTAR</a></span>
            <ul >
                <li><NavLink exact  to="/">Home</NavLink ></li>
                <li> <a href="#"> Work </a></li>
                <li> <a href="#"> Profile </a></li>
                <li> <a href="#"> Portfolio </a></li>
                <li> <a href="#"> About </a></li>
                <li><NavLink  to="/contact">Contact</NavLink ></li>    
            </ul>
            </div>
        </div>
    ) ; 
}
export default Nav;