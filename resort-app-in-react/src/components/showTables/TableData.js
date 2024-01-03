import React, { useState } from "react";

const TableData = (props) => {
  //Delete the order
  
  const deleteItemHandler = () => {
    //setValue("masala dosa");
    props.onDelete(props.id);
  };

  return (
    <>
      <ul>
        <li>
          {props.dish} - RS.{props.price} {props.id}
          <button onClick={deleteItemHandler}>X</button>
        </li>
      </ul>
    </>
  );
};
export default TableData;
