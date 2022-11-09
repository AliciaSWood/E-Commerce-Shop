import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteItemById } from '../../services/cartItems';
import styles from "./CartItem.module.scss"



const CartItem = ({itemData}) => {
    const navigate = useNavigate();

      const deleteItemButton = () => {
        deleteItemById(itemData).then(() => navigate('/cart'))
       
    } 

    return (
        <div>
            <div className = {styles.Row}>
       
        </div>
        <div className = {styles.Row}>
        <div className = {styles.CartRow}>
        <img className = {styles.image} src = {itemData.image}/>
        <h3>{itemData.name}</h3>
        <h3>1</h3>
        <h3 className = {styles.Price}>${itemData.price}</h3>
        </div>
        <button className = {styles.DeleteButton} onClick = {deleteItemButton}>Remove Item</button>
        </div>
        </div>
    );
};

export default CartItem;