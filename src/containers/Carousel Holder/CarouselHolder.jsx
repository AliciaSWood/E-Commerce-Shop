import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import styles from "./CarouselHolder.module.scss"
import { getItems } from '../../services/shopItems';
import Carousel2 from '../../components/Carousel/Carousel2';

const CarouselHolder = () => {

    console.log()
    return (
        <div className = {styles.Holder}>
            <Carousel2 />
            
        </div>
    );
};

export default CarouselHolder;