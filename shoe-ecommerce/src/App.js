import { useState } from "react";
import "./App.css";
import AddShoe from "./components/AddShoe";
import Navbar from "./components/Navbar";
import ShowShoe from "./components/ShowShoe";
import ShoeContextProvider from "./context/ShoeContextProvider";
import CartContextProvider from "./context/CartContextProvider";
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
      <ShoeContextProvider>
        <CartContextProvider>
          {showModal && <Cart onCartHide={handleCloseModal} />}
          <Navbar onClick={handleShowModal} />
          <div className="container">
            <AddShoe />
          </div>
          <div className="container">
            <ShowShoe />
          </div>
        </CartContextProvider>
      </ShoeContextProvider>
    </>
  );
}

export default App;
