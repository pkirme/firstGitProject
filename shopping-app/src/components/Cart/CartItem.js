import { cartActions } from "../../store/cart";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, quantity, totalPrice, price } = props.item;

  const onQuantityIncreaseHandler = () => {
    dispatch(
      cartActions.addItemToCart({ id, title, quantity, totalPrice, price })
    );
  };
  const onQuantityDecreaseHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onQuantityDecreaseHandler}>-</button>
          <button onClick={onQuantityIncreaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
