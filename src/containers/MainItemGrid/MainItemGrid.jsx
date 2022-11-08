import React, { useEffect, useState } from 'react';
import ItemCard from '../../components/ItemCard/ItemCard';
import { getFeatured, getItems, tryGetFeatured } from '../../services/shopItems';
import styles from "./MainItemGrid.module.scss"

const MainItemGrid = () => {
    const [items, setItems] = useState([]);

    useEffect( () => {
        getItems().then((items) => setItems(items))
       getFeatured()
    }, [])
 
    // console.log(items)
    // const firstItem = items.find(item => item.id === "i10");
    // console.log(firstItem.image)
    return (
        <>
        <div className = {styles.BestSellers}>
            <br></br>
            <h1>Check out some of our favourites...</h1>
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