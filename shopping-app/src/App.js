import { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui";

let flag = true;

function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state) => state.ui.isVisible);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!!",
        })
      );
      const response = await fetch(
        "https://react-database-afa21-default-rtdb.firebaseio.com/cartData.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
      if (!response.ok) {
        throw new Error("Sending data fail!!");
      }
      if (response.ok) {
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success...",
            message: "Sending cart data successfully!!",
          })
        );
      }
      // const responseData = await response.json();
    };
    if (flag) {
      flag = false;
      return;
    }
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Sending cart data fail!!",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
