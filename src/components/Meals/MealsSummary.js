import React from "react";

import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious food, Delivered to you</h2>
      <p>Choose your favourite meal from a broad selection of meals</p>
      <p>
        All our meals are prepared with high quality ingredients, just-in-time
        and ofcourse by experienced chefs.
      </p>
    </section>
  );
};

export default MealsSummary;
