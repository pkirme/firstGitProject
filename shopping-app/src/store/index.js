import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../store/ui";

const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export default store;
