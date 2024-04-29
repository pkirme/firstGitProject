import { expenseActions } from "./expense";

const url = "https://expensetracker-8fe52-default-rtdb.firebaseio.com";

export const fetchExpenseData = (userEmail) => {
  return async (dispatch) => {
      const fetchData = async () => {
      const response = await fetch(
        `${url}/${userEmail.replace(/[.@]/g, "")}.json`
      );
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

export const sendExpenseData = (data, userEmail) => {
  return async () => {
    console.log(data);
    const sendRequest = async () => {
      const response = await fetch(
        `${url}/${userEmail.replace(/[.@]/g, "")}.json`,
        {
          method: "PUT",
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Sending data fail!!");
      }
    };

    try {
      await sendRequest();
    } catch (error) {}
  };
};
