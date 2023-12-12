//import "../UI/Card.css";
import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //   enterTitle: "",
  //   enterAmount: "",
  //   enterDate: "",
  // });

  const [enterTitle, setEnterTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterTitle: event.target.value,
    // });
  };

  const [enterAmount, setEnterAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterAmount: event.target.value,
    // });
  };

  const [enterDate, setEnterDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    props.onSaveExpenseData(expenseData);

    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label">Title</label>
          <input
            className="new-expense__control input"
            type="text"
            value={enterTitle}
            placeholder="Enter Expense title here"
            onChange={titleChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label className="new-expense__control label">Amount</label>
          <input
            className="new-expense__control input"
            type="number"
            value={enterAmount}
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
            value={enterDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
