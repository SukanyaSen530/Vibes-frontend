import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticateUser: (state) => {
      state.value += 1;
    },
    logoutUser: (state) => {
      state.value -= 1;
    },
  },
});

export const { authenticateUser, logoutUser } = authSlice.actions;

export const selectCount = (state) => state.counter.value;

export default authSlice.reducer;
