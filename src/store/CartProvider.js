import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//cartReducer has intial state snapshot, and the action.
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    default:
      return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  //useReducer returns an array with two elements:
  //i) state snapshot after dispatch function has executed.
  //ii) dispatch function that tells when to execute a function.
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    // 'type' is an identifier that lets you know which what to execute
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
