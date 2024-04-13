import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../store/ui";
import cartReduser from "../store/cart";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReduser,
  },
});

export default store;
