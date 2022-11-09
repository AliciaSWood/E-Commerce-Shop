import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./ItemCard.module.scss"

const ItemCard = ({itemData}) => {
    return (
        <NavLink className = {styles.Nav} to={`items/${itemData.id}`}>
        <div className = {styles.Card}>
            
            <img className = {styles.ItemImage} src = {itemData.image}/>
            <h2 className = {styles.ItemName}> {itemData.name}</h2>
            <p className = {styles.ItemPrice}>${itemData.price}</p>
            
        </div>
        </NavLink>
    );
};

export default ItemCard;