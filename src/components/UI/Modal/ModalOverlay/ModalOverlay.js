import React from "react";
import classes from "./ModalOverlay.module.css";

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

export default ModalOverlay;
