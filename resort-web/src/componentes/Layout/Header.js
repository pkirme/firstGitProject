import mealImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meal</h1>
        <HeaderCartButton onClick={props.onShownCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="" />
      </div>
    </>
  );
};

export default Header;
