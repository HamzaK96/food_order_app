import React, { useContext } from "react";
import Card from "../UI/Card/Card";
import classes from "./Cart.module.css";
import { v4 as uuidv4 } from "uuid";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItems = cartCtx.items.map((item) => <li>{item.name}</li>);

  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onClick={props.onClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Cancel
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
