//import "../UI/Card.css";
import React from "react";

const ExpenseForm = () => {
  const AddForm = (e) => {
    e.preventDefault();
    console.log(document.getElementById("expenseTitle").value);
    console.log(document.getElementById("expenseAmount").value);
    console.log(document.getElementById("expenseDate").value);
  };

  return (
    <>
      <form>
        <label>Expense title</label>
        <input
          type="text"
          placeholder="Enter Expense title here"
          id="expenseTitle"
        ></input>

        <label>Expense Amount</label>
        <input
          type="number"
          placeholder="Enter Expense Ammount here"
          id="expenseAmount"
        ></input>

        <label>Expense date</label>
        <input
          type="date"
          placeholder="Enter Expense date here"
          id="expenseDate"
        ></input>
        <button onClick={AddForm}>Add</button>
      </form>
    </>
  );
};
export default ExpenseForm;
