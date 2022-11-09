import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import styles from "./ProductPage.module.scss"
import { getItemById, favouriteItem } from '../../services/shopItems';
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import { addItemToCart } from '../../services/cartItems';



const ProductPage = () => {
    const {id} = useParams();
    const [item, setItem] = useState(null);
    const [error, setError] = useState("");
    const [addItem, setAddItem] = useState(1)
    const [favourite, setFavourite] = useState(false)

    // const [cart, setCart] = useContext(cartContext)
    // const addToCart = (event) => {
    //     // const product = event.target.value
    //     // cart.push(product)
    //     setCart([...cart, event.target.value])
    // }

    const addItemButton = () => {
        addItemToCart(item)
    }
   

    // To update item to 'favourite' on Firestore
    const favouriteButton = (event) => {
        event.target.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/2107/2107845.png");
        favouriteItem(id, !favourite).then(() => setFavourite(!favourite))
    }

    // To get item for page
    useEffect(() => {
        getItemById(id).then((data) => setItem(data)).catch(err => setError(err.message))}, [favourite]);

    // Counter for items
    const increase = () => {
        setAddItem(count => count + 1);
      };

      const decrease = () => {
        if(addItem <= 1){
            setAddItem(1)
        } else
        setAddItem(count => count -1);
      }

    return (
        <>
        <Header />
        {item &&
        <div className = {styles.Main}>
            <img className = {styles.Image} src = {item.image}/>
            <div className = {styles.ItemInfo}>
        <h1>{item.name}</h1>
        <h2>${item.price}</h2>
       
        <div className = {styles.ButtonBox}>
        <button className = {styles.Button} onClick = {increase}>+</button> <p className = {styles.itemNumber}>&nbsp;{addItem}&nbsp;</p> <button className = {styles.Button} onClick = {decrease}>-</button>

        </div>
        <label className = {styles.Label} htmlFor = "variant">Choose a colour:</label>
        <select name = "variant" className = {styles.SelectBox}>
            <option>{item.variant}</option>
            <option>Orange</option>
            <option>Black</option>
        </select>
        <button className = {styles.CartButton} onClick = {addItemButton}>Add to Cart!</button>
      
        <h3>Product Description:</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam quo distinctio doloremque mollitia aspernatur atque eveniet, obcaecati provident consectetur a blanditiis quidem in, nemo similique sequi, debitis quia cumque!</p>
        <p className = {styles.Stock}>Number in stock: {item.quantity}</p>
        <span className = {styles.Favourite}>
        <p className = {styles.FavText}>Add to favourites</p> <img className = {styles.HeartIcon}  src = {favourite ? "https://cdn-icons-png.flaticon.com/512/2107/2107845.png" : "https://cdn-icons-png.flaticon.com/512/1077/1077035.png"} onClick = {favouriteButton}/>
        </span>
            <br></br>
            </div>
        </div>
        }
        </>
    );
};

export default ProductPage;

// filled heart:https://cdn-icons-png.flaticon.com/512/2107/2107845.png
// empty heart:https://cdn-icons-png.flaticon.com/512/1077/1077035.png