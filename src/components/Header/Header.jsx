import React from 'react';
import styles from "./Header.module.scss"
import { Link, Routes, Route } from 'react-router-dom';

const Header = () => {
    return (
        <div className = {styles.Header}>
            <div className = {styles.Circle}></div>
            <h1 className = {styles.DontCare}>Moon Moon</h1>
            <div className = {styles.EndBox}>
            <nav className = {styles.Navbar}>
            <ul>
              <li><Link to = "/">Home</Link> </li>
              <li><Link to = "/shop">Shop</Link></li>
              <li><Link to = "/about">About Us</Link></li>
              <li><Link to = "/cart">Cart</Link></li>
            </ul>
          </nav>
        <h3 className = {styles.Subtitle}>We're here to sell you things <input type = {"text"} className = {styles.SearchBar} placeholder = {"Search for item..."}></input></h3>
        


            </div>
        </div>
    );
};

export default Header;