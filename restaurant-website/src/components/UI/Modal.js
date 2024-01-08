import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverley = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overleys");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onClose} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverley>{props.children}</ModalOverley>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
