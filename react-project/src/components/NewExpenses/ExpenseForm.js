//import "../UI/Card.css";
import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const onTitleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label">Title</label>
          <input
            className="new-expense__control input"
            type="text"
            placeholder="Enter Expense title here"
            onChange={onTitleChange}
          ></input>
        </div>

        <div className="new-expense__control">
          <label className="new-expense__control label">Amount</label>
          <input
            className="new-expense__control input"
            type="number"
            placeholder="Enter Expense Ammount here"
            min="0.01"
            step="0.01"
          ></input>
        </div>

        <div className="new-expense__control">
          <label className="new-expense__control label">Date</label>
          <input
            className="new-expense__control input"
            type="date"
            min="2019-01-01"
            max="2023-12-31"
          ></input>
        </div>
      </div>

      <div className="new-expense__actions" >
        <button>Add</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
