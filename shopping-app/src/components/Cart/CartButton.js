import { cartActions } from "../../store/cart";
import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(cartActions.setCart());
  };
  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
