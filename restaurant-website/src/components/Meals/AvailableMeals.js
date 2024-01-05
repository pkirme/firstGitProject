import { Fragment } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
const AvailableMeals = (props) => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul className={classes.ul}>
          {props.name} {props.description} {props.price}
        </ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
