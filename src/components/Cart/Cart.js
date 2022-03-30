import React, { Fragment } from "react";
import Card from "../UI/Card/Card";
import classes from "./Cart.module.css";
import { v4 as uuidv4 } from "uuid";
import Modal from "../UI/Modal/Modal";

const DUMMY_ITEMS = [
  {
    id: uuidv4(),
    name: "sushi",
    price: "12.99",
    amount: "2",
  },
];

const Cart = (props) => {
  const cartItems = DUMMY_ITEMS.map((item) => <li>{item.name}</li>);

  return (
    <Modal>
      <ul>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Cancel</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
