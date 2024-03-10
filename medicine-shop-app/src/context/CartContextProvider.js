import React, { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const [cart, setCart] = useState({ cartItem: [], totalAmount: 0 });

  const addToCartHandler = (item) => {
    setCart((prev) => {
      const existingItemIndex = prev.cartItem.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      const existingItem = prev.cartItem[existingItemIndex];
      let updatedItem;
      if (existingItem) {
        const updateItem = {
          ...existingItem,
          amount: existingItem.amount + item.amount,
        };
        updatedItem = [...prev.cartItem];

        updatedItem[existingItemIndex] = updateItem;
        // console.log(updatedItem[existingItem]);
      } else {
        updatedItem = [...prev.cartItem, item];
      }

      const updatedTotalAmount = prev.totalAmount + item.price * item.amount;
      return {
        cartItem: updatedItem,
        totalAmount: updatedTotalAmount,
      };
    });
  };

  const cartContext = {
    cartItem: cart.cartItem,
    totalAmount: cart.totalAmount,
    addToCart: addToCartHandler,
  };
  console.log(cartContext);
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
