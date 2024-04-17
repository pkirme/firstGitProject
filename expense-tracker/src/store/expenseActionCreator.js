import { expenseActions } from "./expense";
import { useSelector } from "react-redux";

const url = "https://expensetracker-8fe52-default-rtdb.firebaseio.com";

export const fetchData = () => {
  return async (dispatch) => {
    const userEmail = useSelector((state) => state.auth.email);
    const email = userEmail.replace(/[.@]/g, "");
    const fetchData = async () => {
      const response = await fetch(`${url}/${email}.json`);
      if (!response.ok) {
        throw new Error("Sending data fail!!");
      }
      const data = await response.json();
      dispatch(
        expenseActions.setInitialData({
          expenses: data.expenses || [],
          totalAmount: data.totalAmount || 0,
        })
      );
    };

    try {
      await fetchData();
    } catch (error) {}
  };
};

export const sendExpenseData = (data) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Sending data fail!!");
      }
    };

    try {
      await sendRequest();
    } catch (error) {}
  };
};
