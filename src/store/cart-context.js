import React from "react";

const CartContext = React.createContext({
  items: [],
  amount: 0,
  addIte: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
