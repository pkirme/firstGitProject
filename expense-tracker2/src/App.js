import { Switch, Route, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { expenseActions } from "./store/expense";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import WelcomePage from "./pages/WelcomePage";
import ProfilePage from "./pages/ProfilePage";

import {
  fetchExpenseData,
  sendExpenseData,
} from "./store/expenseActionCreator";

let flag = true;

function App() {
  // const url = `https://expensetracker-8fe52-default-rtdb.firebaseio.com`;

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isLoggedIn);
  const userEmail = useSelector((state) => state.auth.email);
  const expenses = useSelector((state) => state.expense);

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchExpenseData(userEmail));
    } else {
      return;
    }
  }, [dispatch, isAuth, userEmail]);

  useEffect(() => {
    if (isAuth) {
      if (flag) {
        flag = false;
        return;
      }
      if (expenses.changed) {
        console.log("hiiiii");
        dispatch(sendExpenseData(expenses, userEmail));
      }
    } else {
      return;
    }
  }, [expenses, dispatch, isAuth, userEmail]);

  return (
    <Switch>
      {isAuth && (
        <Route path="/" exact>
          <WelcomePage />
        </Route>
      )}
      {isAuth && (
        <Route path="/profile">
          <ProfilePage />
        </Route>
      )}

      {!isAuth && (
        <Route path="/" exact>
          <Login />
        </Route>
      )}

      {!isAuth && (
        <Route path="/signup">
          <SignUp />
        </Route>
      )}

      {!isAuth && (
        <Route>
          <Redirect to="/" />
        </Route>
      )}
    </Switch>
  );
}

export default App;
