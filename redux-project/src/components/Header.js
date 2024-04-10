import { useSelector, useDispatch } from "react-redux";
import classes from "./Header.module.css";
import { authAction } from "../store/index";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticate);
  const onLogoutHandler = () => {
    dispatch(authAction.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              {" "}
              <a href="/">My Products</a>
            </li>
            <li>
              {" "}
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={onLogoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
