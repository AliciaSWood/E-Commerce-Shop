import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import styles from "./CarouselHolder.module.scss"

const CarouselHolder = () => {
    return (
        <div className = {styles.Holder}>
            <Carousel />
        </div>
    );
};

export default CarouselHolder;