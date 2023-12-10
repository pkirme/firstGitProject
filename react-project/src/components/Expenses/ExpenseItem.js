import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => { 
  // const DeleteExpense = () => {
  //   //setTitle("Updated");
  //   console.log("Item deleted");
  // };

  const [expense, setExpense] = useState(props.amount);
  const ChangeExpense = () => {
    setExpense("100");
  };

  const [title, setTitle] = useState(props.title);
  const ChangeTitle = () => {
    setTitle("Title Updated");
  };

  return (
    <Card className="expense-item" id="abc">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2 id="h2">{title}</h2>
        <h2>{props.locationOfExpenditure}</h2>
        <div className="expense-item__price">Rs {expense}</div>
      </div>

      <button onClick={ChangeTitle}>Change Title</button>
      <button onClick={ChangeExpense}>Change Expense</button>
    </Card>
  );
};
export default ExpenseItem;
