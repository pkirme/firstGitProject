import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isVisible: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
