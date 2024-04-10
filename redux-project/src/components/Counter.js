import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const onIncrement = () => {
    dispatch(counterAction.increment());
  };

  const onDecrement = () => {
    dispatch(counterAction.decrement());
  };

  const onIncrease = () => {
    dispatch(counterAction.increase(10));
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onIncrease}>Increase</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
