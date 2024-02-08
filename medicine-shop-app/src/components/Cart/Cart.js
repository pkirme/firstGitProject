import React from "react";
import { useCart } from "../../contexts";

function Cart() {
  
  const { carts } = useCart();
  const onClickHandler = () => {
    console.log(carts.cart.map((cart) => cart));
    console.log(carts.totalAmount);
  };
  return (
    <>
      <button onClick={onClickHandler}>Cart</button>
    </>
  );
}

export default Cart;
