import "./ExpenseItem.css";
import ExpenceDate from "./ExpenseDate";
import ExpenceItem from "./ExpenseItem";
function Expense(props) {
  return (
    <div className="expense-item">
      <ExpenceDate date={props.date}/>
      <ExpenceItem
        title={props.title}
        amount={props.amount}
        locationOfExpenditure={props.LocationOfExpenditure}
      />
    </div>
  );
}
export default Expense;
