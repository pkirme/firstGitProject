import { useState } from "react";
import AddMedicine from "./components/AddMedicine";
import Navbar from "./components/Navbar";
import ShowMedicine from "./components/ShowMedicine";
import CartContextProvider from "./context/CartContextProvider";
import MedicineContextProvider from "./context/MedicineContextProvider";
import Cart from "./components/Cart";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <MedicineContextProvider>
        <CartContextProvider>
          {showModal && <Cart onCartHide={handleCloseModal} />}
          <Navbar onClick={handleShowModal} />
          <div className="container">
            <AddMedicine />
          </div>
          <div className="container">
            <ShowMedicine />
          </div>
        </CartContextProvider>
      </MedicineContextProvider>
    </>
  );
}

export default App;
