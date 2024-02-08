import React, { useState } from "react";
import { CartContextProvider, MedicineProvider } from "./contexts";
import MedicineForm from "./components/AddMedicine/MedicineForm";
import ShowMedicine from "./components/ShowMedicine/ShowMedicine";
import Cart from "./components/Cart/Cart";

function App() {
  const [medicines, setMedicines] = useState([]);
  const [carts, setCart] = useState({ cart: [], totalAmount: 0 });

  //Add new medicine
  const addMedicine = (medicine) => {
    setMedicines((prev) => [...prev, { id: Math.random(), ...medicine }]);
  };

  //Update quntity
  const updateMedicine = (id, updatedMedicine) => {
    setMedicines((prev) =>
      prev.map((prevMedicine) =>
        prevMedicine.id === id ? updatedMedicine : prevMedicine
      )
    );
  };

  //Add to cart
  const addToCart = (medicine) => {
    setCart((prev) => {
      let existingItemIndex = prev.cart.findIndex(
        (item) => item.id === medicine.id
      );
      const existingItem = prev.cart[existingItemIndex];
      let updatedItems;

      if (existingItem) {
        const updateItem = {
          ...existingItem,
          quantity: existingItem.quantity + medicine.quantity,
        };
        updatedItems = [...prev.cart];
        updatedItems[existingItemIndex] = updateItem;
      } else {
        updatedItems = [...prev.cart, medicine];
      }

      const updatedTotalAmount =
        prev.totalAmount + medicine.price * medicine.quantity;

      return {
        cart: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    });
  };

  return (
    <MedicineProvider value={{ medicines, addMedicine, updateMedicine }}>
      <CartContextProvider value={{ carts, addToCart }}>
        <Cart />
        <MedicineForm />
        <ShowMedicine />
      </CartContextProvider>
    </MedicineProvider>
  );
}

export default App;
