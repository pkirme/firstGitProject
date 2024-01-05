import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = (props) => {
  console.log(props.data);
  return (
    <Fragment>
      <MealsSummary />
      {props.data.map((meal) => (
        <AvailableMeals
          key={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </Fragment>
  );
};
export default Meals;
