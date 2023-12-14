import "./ExpensesList.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expenseChangeYear;
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found !</h2>;
  }
  if (props.items.length === 1) {
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
        <h3 className="expenses-list__fallback">Only single Expense here. Please add more...</h3>
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
  return <ul className="expenses-list">{expenseChangeYear}</ul>;
};
export default ExpensesList;
