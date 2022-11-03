import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import styles from "./CarouselHolder.module.scss"
import { getItems } from '../../services/shopItems';

const CarouselHolder = () => {

    console.log()
    return (
        <div className = {styles.Holder}>
            <Carousel />
        </div>
    );
};

export default CarouselHolder;