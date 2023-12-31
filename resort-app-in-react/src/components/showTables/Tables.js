import React, { useState } from "react";
import TableData from "./TableData";
const Tables = (props) => {
  const onDeleteHandler = (id) => {
    props.onDelete(id);
  };

  const filterData = props.data.filter((item) => props.id === item.tableNo);

  //filter data according to condition.
  let tableContent=<p>Order not found!!!</p>
  if(filterData.length>0){
    tableContent=filterData.map((item) => (
      <TableData
        key={item.id}
        id={item.id}
        dish={item.dish}
        price={item.price}
        onDelete={onDeleteHandler}
      ></TableData>
    ))
  }

  return (
    <>
      {tableContent}
    </>
  );
};
export default Tables;
