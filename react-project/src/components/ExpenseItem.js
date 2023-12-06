import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  return (
    <div className="expense-item__description">
      <ExpenseDate date={props.date}></ExpenseDate>
      <h2>{props.title}</h2>
      <h2>{props.locationOfExpenditure}</h2>
      <div className="expense-item__price">Rs {props.amount}</div>
    </div>
  );
}
export default ExpenseItem;
