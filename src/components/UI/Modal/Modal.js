import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Backdrop from "./Backdrop/Backdrop";
import ModalOverlay from "./ModalOverlay/ModalOverlay";

const Modal = (props) => {
  const overlays = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClick={props.onClick} />, overlays)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlays
      )}
    </Fragment>
  );
};

export default Modal;
