import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
  totalAmount: 0,
  changed: false,
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setInitialData(state, action) {
      state.expenses = action.payload.expenses;
      state.totalAmount = action.payload.totalAmount;
      console.log(state.expenses);
      console.log(state.totalAmount);
    },

    addExpense(state, action) {
      state.expenses.push(action.payload);
      state.totalAmount = state.expenses.reduce((acc, item) => {
        return (acc += parseInt(item.money));
      }, 0);
      console.log(state.totalAmount);
      state.changed = true;
    },

    updateExpense(state, action) {
      const { id, money, description, category } = action.payload;
      const existingIndex = state.expenses.findIndex(
        (expense) => expense.id === id
      );
      state.expenses[existingIndex] = { id, money, description, category };
      state.totalAmount = state.expenses.reduce((acc, item) => {
        return (acc += parseInt(item.money));
      }, 0);
      console.log(state.totalAmount);
      state.changed = true;
    },

    removeExpense(state, action) {
      const updatedList = state.expenses.filter(
        (item) => item.id !== action.payload
      );
      state.expenses = updatedList;
      state.totalAmount = state.expenses.reduce((acc, item) => {
        return acc + parseInt(item.money);
      }, 0);
      console.log(state.totalAmount);

      state.changed = true;
    },
  },
});

export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;
