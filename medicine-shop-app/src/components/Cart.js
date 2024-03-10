import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `Rs ${cartCtx.totalAmount.toFixed(2)}`;
  const hasCartItems = cartCtx.cartItem.length > 0;

  const cartItems = (
    <ul>
      {cartCtx.cartItem.map((item) => (
        <li key={item.id}>
          {item.name}--{item.price}--{item.amount}
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onCartHide}>
      {cartItems}
      <div>
        <span>
          <strong>Total Amount : </strong>
        </span>
        <span>{totalAmount}</span>
      </div>
      <div>
        <button className="btn btn-primary mx-2" onClick={props.onCartHide}>
          Close
        </button>
        {hasCartItems && <button className="btn btn-primary">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
