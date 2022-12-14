import React from "react";
import { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import Header from "../../components/Header/Header";
import { createContext } from "react";
import { getCartItems } from "../../services/cartItems";
import CartItem from "../../components/CartItem/CartItem";
export const cartContext = createContext();
const Cart = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState();

  // To get item for page
  useEffect(() => {
    getCartItems().then((items) => setItems(items));
  }, [cart]);

  return (
    <div>
      <Header />
      <div className={styles.CartTitle}>Your Cart</div>
      <div className={styles.Heading}>
        <p>Product</p>
        <p className={styles.Quantity}>Quantity</p>
        <p>Price</p>
      </div>
      {items.map((itemData) => (
        <CartItem key={itemData.id} itemData={itemData} setCart={setCart} />
      ))}
    </div>
  );
};

export default Cart;

// <img className = {styles.HeartIcon}  src = {favourite ? "https://cdn-icons-png.flaticon.com/512/2107/2107845.png" : "https://cdn-icons-png.flaticon.com/512/1077/1077035.png"} onClick = {favouriteButton}/>
