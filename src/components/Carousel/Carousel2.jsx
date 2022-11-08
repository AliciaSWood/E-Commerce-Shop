import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from "./Carousel.module.scss"
import { useState, useEffect } from 'react';
import {  getItemById } from '../../services/shopItems';


const Carousel2 = () => {
    const [error, setError] = useState("");
    const [item1, setItem1] = useState("")
    const [item2, setItem2] = useState("")
    const [item3, setItem3] = useState("")
  
    


    useEffect(() => {
      getItemById("i10").then((data) => setItem1(data)).catch(err => setError(err.message))
      getItemById("i2").then((data) => setItem2(data)).catch(err => setError(err.message))
      getItemById("i5").then((data) => setItem3(data)).catch(err => setError(err.message))
    
    }, []);
      
    return ( 
      <>
         <div className = {styles.Carousel}>
    <Carousel fade>
    <Carousel.Item interval={3000}>
      <img
        className={styles.CarouselImage}
        src={item1.image}
      />
      <Carousel.Caption>
        <h3>Keep warm this winter</h3>
        <p>With our new collection of soft blankets</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img
        className={styles.CarouselImage}
        src={item2.image}
      />

      <Carousel.Caption>
        <h3>Time for some fresh sheets?</h3>
        <p>Check out our range of smooth, soft satin sheets to make bed time even more irresistable</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img
        className={styles.CarouselImage}
        src={item3.image}
      />

      <Carousel.Caption>
        <h3>And now for something totally different...</h3>
        <p>
          Make your room a little more whimsical with a fun new night light 
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  
  </>
    );
};

export default Carousel2;