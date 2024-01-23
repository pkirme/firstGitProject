import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cart, setCart] = useState({
    items: [],
    totalAmount: 0,
  });

  const addItemHandler = (item) => {
    setCart((prevState) => {
      const existingItemIndex = prevState.items.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      const existingItem = prevState.items[existingItemIndex];
      let updatedItems;

      if (existingItem) {
        const updateItem = {
          ...existingItem,
          amount: existingItem.amount + item.amount,
        };
        updatedItems = [...prevState.items];
        updatedItems[existingItemIndex] = updateItem;
      } else {
        updatedItems = [...prevState.items, item];
      }
     
      const updatedTotalAmount =
        prevState.totalAmount + item.price * item.amount;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    });
  };

  const removeItemHandler = (id) => {
    setCart((prevState) => {
      const existingItemIndex = prevState.items.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingItem = prevState.items[existingItemIndex];
      const updatedTotalAmount = prevState.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = prevState.items.filter((item) => item.id !== id);
      } else {
        const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
        updatedItems = [...prevState.items];
        updatedItems[existingItemIndex] = updatedItem;
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    });
  };

  const cartContext = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
