import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./ItemCard.module.scss"

const ItemCard = ({itemData}) => {
    return (
        <div className = {styles.Card}>
            <img className = {styles.ItemImage} src = {itemData.image}/>
            <h2 className = {styles.ItemName}>{itemData.name}</h2>
            <p className = {styles.ItemPrice}>${itemData.price}</p>
            <NavLink to={`items/${itemData.id}`}></NavLink>
        </div>
    );
};

export default ItemCard;