import React, { useEffect, useState } from 'react';
import ItemCard from '../../components/ItemCard/ItemCard';
import { getItems } from '../../services/shopItems';
import styles from "./MainItemGrid.module.scss"

const MainItemGrid = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then((items) => setItems(items))
    }, [])
 
    console.log(items)
    return (
        <div className = {styles.MainGrid}>
            {items.map((itemData) => (
                <ItemCard key = {itemData.id} itemData = {itemData}/>
            ))}
            
            
        </div>
    );
};

export default MainItemGrid;