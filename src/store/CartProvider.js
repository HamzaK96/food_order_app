import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//cartReducer has intial state snapshot, and the action.
const cartReducer = (state, action) => {
  let updatedItems;
  let updatedTotalAmount;
  let existingCartItemIndex;
  let existingCartItem;

  switch (action.type) {
    case "ADD":
      //find whether item already exists in the array.
      existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      //fetch that cart item
      existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        //update the amount of that item
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };

        //get all state items in another list
        updatedItems = [...state.items];
        //replace existing item with updated item with new data
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      //   const updatedItems = [...state.items, action.item];
      updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case "REMOVE":
      //find whether item already exists in the array.
      existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );

      //fetch that cart item
      existingCartItem = state.items[existingCartItemIndex];

      //remove total removed item from the totalAmount of items in the cart.
      updatedTotalAmount = state.totalAmount - existingCartItem.amount;

      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    default:
      return defaultCartState;
  }

  //   return defaultCartState;
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
    // 'type' is an identifier that lets you know what to execute
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  //THIS IS THE OBJECT THAT IS BEING PASSED TO ALL THE ELEMENTS OF THE APP.
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
