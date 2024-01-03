import React, { useState } from "react";

const TableForm = (props) => {
  //get order Id
  const [updateOrderId, setOrderId] = useState("");
  const changeOrderIdHandler = (event) => {
    setOrderId(event.target.value);
  };

  //get Dish name
  const [updateDishName, setDishName] = useState("");
  const changeDishNameHandler = (event) => {
    setDishName(event.target.value);
  };

  //get price
  const [updatePrice, setPrice] = useState("");
  const changePriceHandler = (event) => {
    setPrice(event.target.value);
  };

  //get table number
  const [updateTable, setTable] = useState("");
  const changeTableHandler = (event) => {
    setTable(event.target.value);
  };

  //submit form
  const newTableAddHandler = (event) => {
    event.preventDefault();
    const newTable = {
      id: updateOrderId,
      dish: updateDishName,
      price: updatePrice,
      tableNo: updateTable,
    };
    console.log(newTable);
    setOrderId("");
    setDishName("");
    setPrice("");
    setTable("Select");
    props.onSaveTable(newTable);
  };

  return (
    <>
      <form onSubmit={newTableAddHandler}>
        <label>Order ID:</label>
        <input
          type="number"
          value={updateOrderId}
          onChange={changeOrderIdHandler}
        />

        <label>Dish Name:</label>
        <input
          type="text"
          value={updateDishName}
          onChange={changeDishNameHandler}
        />

        <label>Price:</label>
        <input
          type="number"
          value={updatePrice}
          onChange={changePriceHandler}
        />

        <label>Choose Table:</label>
        <select value={updateTable} onChange={changeTableHandler}>
          <option defaultValue="Select">Select</option>
          <option value="table1">Table1</option>
          <option value="table2">Table2</option>
          <option value="table3">Table3</option>
        </select>

        <button type="submit">Add</button>
      </form>
    </>
  );
};
export default TableForm;
