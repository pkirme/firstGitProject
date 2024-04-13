import { uiActions } from "../../store/ui";
import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const cartTotalNo = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalNo}</span>
    </button>
  );
};

export default CartButton;
