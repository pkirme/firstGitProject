import "./ExpenceItem.css";
function ExpenceItem() {
  const LocationOfExpenditure = "Nagpur";
  return (
    <div>
      <div>
        <h2>Expense Items</h2>
      </div>
      <div className="expense-item">
        <div>
          <h3>Food</h3>
        </div>
        <div className="expense-item__description">
          <h2>{LocationOfExpenditure}</h2>
          <div className="expense-item__price">Rs 10</div>
        </div>
      </div>

      <div className="expense-item">
        <div>
          <h3>Petrol</h3>
        </div>
        <div className="expense-item__description">
          <h2>{LocationOfExpenditure}</h2>
          <div className="expense-item__price">Rs 100</div>
        </div>
      </div>

      <div className="expense-item">
        <div>
          <h3>Movies</h3>
        </div>
        <div className="expense-item__description">
          <h2>{LocationOfExpenditure}</h2>
          <div className="expense-item__price">Rs 200</div>
        </div>
      </div>
    </div>
  );
}
export default ExpenceItem;
