import "./ExpensesList.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expenseChangeYear;
  if (props.items.length === 0) {
    expenseChangeYear = <p>No Expenses found</p>;
  } else if (props.items.length === 1) {
    expenseChangeYear = (
      <div>
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        <p>Only single Expense here. Please add more...</p>
      </div>
    );
  } else {
    expenseChangeYear = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
    return (
        <ul className="expenses-list">
            {expenseChangeYear}
        </ul>
    )
};
export default ExpensesList;
