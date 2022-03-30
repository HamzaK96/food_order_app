import React, { useState, Fragment } from "react";
<<<<<<< HEAD
=======
import Cart from "./components/Cart/Cart";
>>>>>>> 21fadbe17f3e136e023b12dbb1d2325f771738c1
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const closeCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
<<<<<<< HEAD
      {cartIsShown && <Header />}
=======
      {cartIsShown && <Cart />}
      <Header onShowCart = {showCartHandler}/>
>>>>>>> 21fadbe17f3e136e023b12dbb1d2325f771738c1
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
