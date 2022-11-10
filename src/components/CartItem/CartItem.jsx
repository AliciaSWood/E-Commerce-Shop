import React from 'react';
import { deleteItemById } from '../../services/cartItems';
import styles from "./CartItem.module.scss"



const CartItem = ({itemData, setCart}) => {

      const deleteItemButton = () => {
        deleteItemById(itemData)
       setCart([itemData])
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