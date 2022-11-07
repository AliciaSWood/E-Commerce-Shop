import React, { useEffect, useState } from 'react';
import ItemCard from '../../components/ItemCard/ItemCard';
import { getItems } from '../../services/shopItems';
import styles from "./MainItemGrid.module.scss"

const MainItemGrid = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then((items) => setItems(items))
    }, [])
 
    // console.log(items)
    // const firstItem = items.find(item => item.id === "i10");
    // console.log(firstItem.image)
    return (
        <>
        <div className = {styles.BestSellers}>
            <h1>Some of our favourites...</h1>
        </div>
        <div className = {styles.MainGrid}>
            
            {items.map((itemData) => (
                <ItemCard key = {itemData.id} itemData = {itemData}/>
            ))}
            
            
        </div>
        </>
    );
};

export default MainItemGrid;