import "./Expense.css";
import "./ExpenseItem.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expense">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.data.map((expense) => (
        <div>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        </div>
      ))}
    </Card>
  );
};
export default Expense;
