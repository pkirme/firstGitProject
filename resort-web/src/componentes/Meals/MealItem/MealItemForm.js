import React, { useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(1);
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountChangeHandler = (event) => {
    const enteredAmount = event.target.value;
    setAmount(enteredAmount);

    if (
      enteredAmount.trim().length === 0 ||
      +enteredAmount < 1 ||
      +enteredAmount > 5
    ) {
      setAmountIsValid(false);
    } else {
      setAmountIsValid(true);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!amountIsValid) {
      return;
    }

    props.onAddToCart(+amount);
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
          onChange: amountChangeHandler,
        }}
      />

      <button onClick={onSubmitHandler}>+Add</button>

      {!amountIsValid && <p>Please entered valid amount value(1-5)!!</p>}
    </form>
  );
};

export default MealItemForm;
