import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const [cart, setCart] = useState({ cartItems: [], totalAmount: 0 });

  const addToCartHandler = (item) => {
    setCart((prev) => {
      const existingItemIndex = cart.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      const existingItem = prev.cartItems[existingItemIndex];
      let updatedItem;
      if (existingItem) {
        const updateItem = {
          ...existingItem,
          amount: existingItem.amount + item.amount,
        };
        updatedItem = [...prev.cartItems];
        updatedItem[existingItemIndex] = updateItem;
      } else {
        updatedItem = [...prev.cartItems, item];
      }

      const updatedTotalAmount = prev.totalAmount + item.price * item.amount;
      return {
        cartItems: updatedItem,
        totalAmount: updatedTotalAmount,
      };
    });
  };

  const cartContext = {
    cartItems: cart.cartItems,
    totalAmount: cart.totalAmount,
    addToCart: addToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
