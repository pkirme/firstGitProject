import { useState } from "react";
import Cart from "./componentes/Cart/Cart";
import Header from "./componentes/Layout/Header";
import Meals from "./componentes/Meals/Meals";
import CartContextProvider from "./Store/CartContextProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  const isCartShownHandler = () => {
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };
  return (
    <CartContextProvider>
      {isCartShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShownCart={isCartShownHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
