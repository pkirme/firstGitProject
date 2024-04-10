import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuthenticate: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticate = !state.isAuthenticate;
    },
    logout(state) {
      state.isAuthenticate = !state.isAuthenticate;
    },
  },
});

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = initialValue, action) => {
//   if (action.type === "incrementBy5") {
//     return {
//       counter: state.counter + 5,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrementBy5") {
//     return {
//       counter: state.counter - 5,
//       showCounter: state.showCounter,
//     };
//   }
//   // optimize way
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;

export default store;
