import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import CartIcon from "./CartIcon";
const Navbar = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.cartItem.reduce((num, item) => {
    return num + item.amount;
  }, 0);

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Medicine App
          </a>

          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={props.onClick}
          >
            <span>Cart</span>
            <CartIcon />
            <span>{numberOfCartItems}</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
