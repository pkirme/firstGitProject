import "./ExpenceItem.css";
function ExpenceItem() {
  const LocationOfExpenditure = "Nagpur";
  return (
    <div className="expence-item">
      <div>
        <h2 className="expense-item__description">Expense Items</h2>
      </div>
      <div className="expense-item h2">
        <h3 className="expense-item__price">
          Food Rs 10 {LocationOfExpenditure}
        </h3>
      </div>
      <div className="expense-item h2">
        <h3 className="expense-item__price">
          Petrol Rs 100 {LocationOfExpenditure}
        </h3>
      </div>
      <div className="expense-item h2">
        <h3 className="expense-item__price">
          Movies Rs 200 {LocationOfExpenditure}
        </h3>
      </div>
    </div>
  );
}
export default ExpenceItem;
