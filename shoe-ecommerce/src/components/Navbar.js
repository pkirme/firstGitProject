import { useContext } from "react";
import CartIcon from "./CartIcon";
import CartContext from "../context/CartContext";

const Navbar = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.cartItems.reduce((num, item) => {
    return num + item.amount;
  }, 0);
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Made In India Shoe
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
