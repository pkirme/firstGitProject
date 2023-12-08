import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const DeleteExpense = () => {
    console.log("Item deleted");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.locationOfExpenditure}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>

      <button onClick={DeleteExpense}>Delete</button>
    </Card>
  );
};
export default ExpenseItem;
