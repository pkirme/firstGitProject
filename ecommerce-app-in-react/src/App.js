import React, { useState } from "react";
import NewProduct from "./components/addProducts/NewProduct";
import Products from "./components/showProducts/Products";

const products = Object.keys(localStorage).map((key) =>
  JSON.parse(localStorage.getItem(key))
);

function App() {
  const [updateProducts, setProducts] = useState(products);

  //Add product
  const onAddProductHandler = (data) => {
    setProducts((prevData) => {
      return [...prevData,data];
    });
  };

  //Cancel order
  const onDeleteItemHandler = (id) => {
    localStorage.removeItem(id);
    const updatedProduct = Object.keys(localStorage).map((key) =>
      JSON.parse(localStorage.getItem(key))
    );
    setProducts(updatedProduct);
  };

  const skincareList = updateProducts.filter(
    (item) => item.category === "skincare"
  );

  const foodList = updateProducts.filter((item) => item.category === "food");

  const electronicsList = updateProducts.filter(
    (item) => item.category === "electronics"
  );

  return (
    <>
      <NewProduct onAddProduct={onAddProductHandler} />
      <h1>Products:</h1>
      <h2>Skin care:</h2>
      <Products data={skincareList} onDelete={onDeleteItemHandler} />
      <h2>Food:</h2>
      <Products data={foodList} onDelete={onDeleteItemHandler} />
      <h2>Electronics:</h2>
      <Products data={electronicsList} onDelete={onDeleteItemHandler} />
    </>
  );
}

export default App;
