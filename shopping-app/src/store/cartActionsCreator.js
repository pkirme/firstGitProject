import { uiActions } from "./ui";
import { cartActions } from "./cart";

const url =
  "https://react-database-afa21-default-rtdb.firebaseio.com/cartData.json";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Sending data fail!!");
      }
      const data = await response.json();
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity || 0,
        })
      );
    };

    try {
      await fetchData();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Fetching cart data fail!!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(cart),
      });
      if (!response.ok) {
        throw new Error("Sending data fail!!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Sending cart data successfully!!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Sending cart data fail!!",
        })
      );
    }
  };
};
