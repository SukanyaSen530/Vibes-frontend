import { createSlice } from "@reduxjs/toolkit";
import { extendedAuthApi } from "../services/authApi";
import { extendedUserApi } from "../services/userApi";
import { extendedPostApi } from "../services/postApi";

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
        extendedAuthApi.endpoints.refreshToken.matchRejected,
        (state) => {
          state.token = null;
          state.user = null;
        }
      )
      .addMatcher(
        extendedUserApi.endpoints.updateProfile.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
        }
      )
      .addMatcher(
        extendedPostApi.endpoints.savePost.matchFulfilled,
        (state, { payload: { postId } }) => {
          const updatedUser = {
            ...state.user,
            saved: [...state.user.saved, postId],
          };
          state.user = updatedUser;
        }
      )
      .addMatcher(
        extendedPostApi.endpoints.unsavePost.matchFulfilled,
        (state, { payload: { postId } }) => {
          const updatedUser = {
            ...state.user,
            saved: state.user.saved.filter((id) => id !== postId),
          };
          state.user = updatedUser;
        }
      );
  },
});


export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
