import "./Expense.css";
import "./ExpenseItem.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
function Expense(props) {
  return (
    <Card className="expense">
      {props.data.map((expense) => (
        <div>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            locationOfExpenditure={expense.LocationOfExpenditure}
          />
        </div>
      ))}
    </Card>
  );
}
export default Expense;
