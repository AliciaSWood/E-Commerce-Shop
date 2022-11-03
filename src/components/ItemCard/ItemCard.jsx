import React from 'react';
import styles from "./ItemCard.module.scss"

const ItemCard = ({itemData}) => {
    return (
        <div className = {styles.Card}>
            <img className = {styles.ItemImage} src = {itemData.image}/>
            <h2 className = {styles.ItemName}>{itemData.name}</h2>
            <p className = {styles.ItemPrice}>${itemData.price}</p>
        </div>
    );
};

export default ItemCard;