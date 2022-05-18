import { createSlice } from "@reduxjs/toolkit";
import { extendedAuthApi } from "../services/authApi";

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        extendedAuthApi.endpoints.signinUser.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.user = payload.user;
          console.log('refresh', state.user, state.token);
        }
      )
      .addMatcher(
        extendedAuthApi.endpoints.refreshToken.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.user = payload.user;
        }
      )
      .addMatcher(
        extendedAuthApi.endpoints.logoutUser.matchFulfilled,
        (state) => {
          state.token = null;
          state.user = null;
        }
      );
  },
});

// export const { logoutUser } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
