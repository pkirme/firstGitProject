import { createSlice } from "@reduxjs/toolkit";
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
export const authAction = authSlice.actions;
export default authSlice.reducer;
