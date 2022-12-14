import React from "react";
import styles from "./CarouselHolder.module.scss";
import Carousel2 from "../../components/Carousel/Carousel2";

const CarouselHolder = () => {
  return (
    <div className={styles.Holder}>
      <Carousel2 />
    </div>
  );
};

export default CarouselHolder;
