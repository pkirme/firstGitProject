import "./ExpenseItem.css";
import ExpenseItem from "./ExpenseItem";
function Expense(props) {
  return (
    <div>
      {props.data.map((expense) => (
        <div className="expense-item">
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            locationOfExpenditure={expense.LocationOfExpenditure}            
          />
        </div>
      ))}
    </div>
  );
}
export default Expense;
