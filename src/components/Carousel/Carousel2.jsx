import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from "./Carousel.module.scss"
import { useState, useEffect } from 'react';
import { getItems } from '../../services/shopItems';


const Carousel2 = ({itemData}) => {
    const [error, setError] = useState("");
    const [item1, setItem1] = useState("")
 
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then((items) => setItems(items))
        const firstItem = items.find(item => item.id === "i10");


        setItem1(firstItem)
        console.log(firstItem)
    }, [])
   
    console.log(item1)
    const firstItem = items.find(item => item.id === "i10");
    const secondItem = items.find(item => item.id === "i5");
    const thirdItem = items.find(item => item.id === "i2");
    // console.log(item1.image)

    return ( 
         <div className = {styles.Carousel}>
    <Carousel fade>
    <Carousel.Item interval={3000}>
      <img
        className={styles.CarouselImage}
        src="https://images.unsplash.com/photo-1667466787015-6fab1527ae7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img
        className={styles.CarouselImage}
        src="https://images.unsplash.com/photo-1667466787015-6fab1527ae7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
      <img
        className={styles.CarouselImage}
        src="https://images.unsplash.com/photo-1667506057353-cb1b43782937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
    );
};

export default Carousel2;