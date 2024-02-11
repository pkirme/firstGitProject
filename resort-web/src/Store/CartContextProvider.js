import React, { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const [cart, setCart] = useState({ items: [], totalAmount: 0 });
  const addCartItems = (item) => {
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

  const removeCartItems = (id) => {
    
  };

  const cartContext = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    addItem: addCartItems,
    removeItem: removeCartItems,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
