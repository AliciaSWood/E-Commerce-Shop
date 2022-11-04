import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import styles from "./ProductPage.module.scss"
import { getItemById } from '../../services/shopItems';
import { useParams } from 'react-router-dom';
import {  doc, updateDoc, increment } from 'firebase/firestore';
import database from '../../config/firebase';


const ProductPage = () => {
    const {id} = useParams();
    const [item, setItem] = useState(null);
    const [error, setError] = useState("");
    const [addItem, setAddItem] = useState(1)


    useEffect(() => {
        getItemById(id).then((data) => setItem(data)).catch(err => setError(err.message))}, [addItem]);

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
        <button className = {styles.Button} onClick = {increase}>+</button> <p>&nbsp;{addItem}&nbsp;</p> <button className = {styles.Button} onClick = {decrease}>-</button>

        </div>
        <label className = {styles.Label} for = "variant">Choose a colour:</label>
        <select name = "variant" className = {styles.SelectBox}>
            <option>Blue</option>
            <option>Pink</option>
            <option>Green</option>
        </select>
        <button className = {styles.CartButton}>Add to Cart!</button>
      
        <h3>Product Description:</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam quo distinctio doloremque mollitia aspernatur atque eveniet, obcaecati provident consectetur a blanditiis quidem in, nemo similique sequi, debitis quia cumque!</p>
        <p className = {styles.Stock}>Number in stock: {item.quantity}</p>
            <br></br>
            </div>
        </div>
        }
        </>
    );
};

export default ProductPage;