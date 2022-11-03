import React from 'react';
import Header from '../Header/Header';
import styles from "./ProductPage.module.scss"

const ProductPage = () => {
    return (
        <>
        <Header />
        <div className = {styles.Main}>
            <img className = {styles.Image} src = "https://images.unsplash.com/photo-1667312705019-ce9ee9fe4707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            <div className = {styles.ItemInfo}>
        <h1>Item Name</h1>
        <h2>Price</h2>
       
        <div className = {styles.ButtonBox}>
        <button className = {styles.Button}>+</button> <p>Number</p> <button className = {styles.Button}>-</button>

        </div>
        <label className = {styles.Label} for = "variant">Choose a colour:</label>
        <select name = "variant" className = {styles.SelectBox}>
            <option>Blue</option>
            <option>Pink</option>
            <option>Green</option>
        </select>
        <p>Number in stock:</p>
        <h3>Product Description:</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam quo distinctio doloremque mollitia aspernatur atque eveniet, obcaecati provident consectetur a blanditiis quidem in, nemo similique sequi, debitis quia cumque!</p>

            </div>
        </div>
        </>
    );
};

export default ProductPage;