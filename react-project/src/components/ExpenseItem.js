import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <h2>{props.locationOfExpenditure}</h2>
      <div className="expense-item__price">Rs {props.amount}</div>
    </div>
  );
}
export default ExpenseItem;
