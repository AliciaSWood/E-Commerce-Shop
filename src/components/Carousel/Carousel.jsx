import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.scss"

const Carousel = () => {
const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    cssEase: "linear"
}
    
    return (
        <div className = {styles.Carousel}>
         <Slider {...settings}>
<div>
    <img className = {styles.CarouselImage} src = "https://images.unsplash.com/photo-1667466787015-6fab1527ae7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
    
</div>
<div>
    <h1>2</h1>
</div>
<div>
    <h1>3</h1>
</div>
<div>
    <h1>4</h1>
</div>
<div>
    <h1>5</h1>
</div>


         </Slider>
</div>
    );
};

export default Carousel;