import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import Modal from "../UI/Modal";
import SuccessMsg from "./SuccessMsg";

const Cart = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const cartCtx = useContext(CartContext);
  const totalAmount = `Rs ${cartCtx.totalAmount.toFixed(2)}`;
  const hasCartItems = cartCtx.cartItems.length > 0;

  const cartItems = (
    <ul>
      {cartCtx.cartItems.map((item) => (
        <li key={item.id}>
          <strong>Shoe Name :</strong>
          {item.name}||<strong>Price :</strong>
          {item.price}||<strong>Total Quantity :</strong>
          {item.amount}
          {`=>> L(${item.large})  M(
          ${item.medium})  S(${item.small})`}
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
        {hasCartItems && (
          <>
            {showModal && <SuccessMsg onHide={handleCloseModal} />}
            <button className="btn btn-primary" onClick={handleShowModal}>
              Place Order
            </button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
