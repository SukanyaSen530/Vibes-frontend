import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticateUser: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
    logoutUser: () => initialState,
  },
});

export const { authenticateUser, logoutUser } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
