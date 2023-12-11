//import "../UI/Card.css";
import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };

  const [enterAmount, setEnterAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };

  const [enterDate, setEnterDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
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
            onChange={titleChangeHandler}
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
            onChange={amountChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label className="new-expense__control label">Date</label>
          <input
            className="new-expense__control input"
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button>Add</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
