import React from 'react';
import styles from "./Header.module.scss"
import { Link, Routes, Route } from 'react-router-dom';

const Header = () => {
    return (
        <div className = {styles.Header}>
            <div className = {styles.Circle}></div>
            <h1 className = {styles.DontCare}>Sweet Nothing</h1>
            <div className = {styles.EndBox}>
            <nav className = {styles.Navbar}>
            <ul>
              <li><Link to = "/">Home</Link> </li>
              <li><Link to = "/shop">Shop</Link></li>
              <li><Link to = "/about">About Us</Link></li>
              <li><Link to = "/cart">Cart</Link></li>
            </ul>
          </nav>
        <h3 className = {styles.Subtitle}>Rest and relax in absolute comfort <input type = {"text"} className = {styles.SearchBar} placeholder = {"Look for something cosy..."}></input></h3>
        


            </div>
        </div>
    );
};

export default Header;