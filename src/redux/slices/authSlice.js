import { createSlice } from "@reduxjs/toolkit";
import { extendedAuthApi } from "../services/authApi";

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      extendedAuthApi.endpoints.signinUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
      }
    );
  },
});

export const { logoutUser } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
