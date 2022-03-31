import React, { useContext, useReducer } from "react";
// import { useContext } from "react/cjs/react.production.min";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  //we 'hear' for the context here using useContext.
  const cartCtx = useContext(CartContext);

  //reduce function converts array to single object, value
  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    //for every item, we get the amount the user ordered for that type.
    return currNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
