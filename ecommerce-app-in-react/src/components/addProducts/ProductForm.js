import React, { useState } from "react";

const ProductForm = (props) => {
  //get product Id
  const [updateProductId, setProductId] = useState("");
  const changeProductIdHandler = (event) => {
    setProductId(event.target.value);
  };

  //get product name
  const [updateProductName, setProductName] = useState("");
  const changeProductNameHandler = (event) => {
    setProductName(event.target.value);
  };

  //get price
  const [updatePrice, setPrice] = useState("");
  const changePriceHandler = (event) => {
    setPrice(event.target.value);
  };
  //get catogory
  const [updateCategory, setCategory] = useState("");
  const changeCategoryHandler = (event) => {
    setCategory(event.target.value);
  };

  //submit form
  const newProductAddHandler = (event) => {
    event.preventDefault();

    const newProduct = {
      id: updateProductId,
      product: updateProductName,
      price: updatePrice,
      category: updateCategory,
    };
    
    console.log(newProduct);
    setProductId("");
    setProductName("");
    setPrice("");
    setCategory("Select");

    props.onSaveProduct(newProduct);
  };

  return (
    <>
      <form onSubmit={newProductAddHandler}>
        <label>Product ID:</label>
        <input
          type="number"
          value={updateProductId}
          onChange={changeProductIdHandler}
        />

        <label>Product Name:</label>
        <input
          type="text"
          value={updateProductName}
          onChange={changeProductNameHandler}
        />

        <label>Price:</label>
        <input
          type="number"
          value={updatePrice}
          onChange={changePriceHandler}
        />

        <label>Choose Category:</label>
        <select value={updateCategory} onChange={changeCategoryHandler}>
          <option defaultValue="Select">Select</option>
          <option value="skincare">Skincare</option>
          <option value="food">Food</option>
          <option value="electronics">Electronics</option>
        </select>

        <button type="submit">Add</button>
      </form>
    </>
  );
};
export default ProductForm;
