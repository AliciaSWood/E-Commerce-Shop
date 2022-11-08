import React, { createContext, useState } from 'react';
import styles from "./Header.module.scss"
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
const navigate = useNavigate()
 const SearchContext = createContext();
 const [search, setSearch] = useState("")

  const Search = ({children}) => {
      const [search, setSearch] = useState("")
         const data = {search, setSearch }
      return (
          <SearchContext.Provider value = {data}>{children}</SearchContext.Provider>
      );
  };
 

  const [input, setInput] = useState("")

  const newInput = (event) => {
    setInput(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    setSearch(input)
    setInput("")
    navigate("/searchresults")
  }
 
    return (
        <div className = {styles.Header}>
          <div>
            <div className = {styles.Circle}></div></div>
            <h1 className = {styles.DontCare}>Sweet Nothing</h1>
            <div className = {styles.EndBox}>
            <nav className = {styles.Navbar}>
            <ul>
              <li><Link to = "/">Home</Link> </li>
              <li><Link to = "/">Shop</Link></li>
              <li><Link to = "/">About Us</Link></li>
              <li><Link to = "/">Cart</Link></li>
            </ul>
          </nav>
          <form onSubmit = {handleSearch}><h3 className = {styles.Subtitle}>Rest and relax in comfort 
        
          <input type = {"text"} className = {styles.SearchBar} placeholder = {"Look for something cosy..."} onChange = {newInput}></input>
          </h3>
          </form>


            </div>
        </div>
    );
};

export default Header;