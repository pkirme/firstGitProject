import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const DeleteExpense = () => {
  //   //setTitle("Updated");
  //   console.log("Item deleted");
  // };

  // const [expense, setExpense] = useState(props.amount);
  // const ChangeExpense = () => {
  //   setExpense("100");
  // };

  // const [title, setTitle] = useState(props.title);
  // const ChangeTitle = () => {
  //   setTitle("Title Updated");
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>

      {/* <button onClick={ChangeTitle}>Change Title</button>
      <button onClick={ChangeExpense}>Change Expense</button> */}
    </Card>
  );
};
export default ExpenseItem;
