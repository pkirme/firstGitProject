import { Route } from "react-router-dom";
import "./App.css";

import Products from "./components/pages/Products";
import Welcome from "./components/pages/Welcome";
import MainHeader from "./components/header/MainHeader";
import ProductDetails from "./components/pages/ProductDetails";
import { Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
