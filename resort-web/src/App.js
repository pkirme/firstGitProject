import Cart from "./componentes/Cart/Cart";
import Header from "./componentes/Layout/Header";
import Meals from "./componentes/Meals/Meals";

function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
