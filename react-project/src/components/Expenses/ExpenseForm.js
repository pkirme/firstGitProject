//import "../UI/Card.css";
import React from "react";

const ExpenseForm = () => {
  const onTitleChange = (event) => {
    console.log(event.target.value);
  };

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
          onChange={onTitleChange}
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
