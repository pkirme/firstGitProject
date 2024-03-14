import React from "react";
import Modal from "../UI/Modal";

const SuccessMsg = (props) => {
  return (
    <Modal onClose={props.onHide}>
      <h4>Congradulation! Your order placed successfully</h4>
      <button className="btn btn-primary" onClick={props.onHide}>
        Close
      </button>
    </Modal>
  );
};

export default SuccessMsg;
