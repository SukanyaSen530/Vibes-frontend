import { baseApi } from "./baseApi";

const headers = new Headers();
headers.append("Access-Control-Allow-Origin", "http://localhost:3000/");
headers.append("Access-Control-Allow-Credentials", "true");

export const extendedAuthApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signinUser: builder.mutation({
      query: (body) => {
        return {
          url: "/auth/signin",
          method: "post",
          body,
          credentials: "include",
          headers,
        };
      },
    }),
    signupUser: builder.mutation({
      query: (body) => {
        return {
          url: "/auth/signup",
          method: "post",
          body,
        };
      },
    }),
    sendMailForgotPassword: builder.mutation({
      query: (body) => {
        return {
          url: "/auth/forgotpassword",
          method: "post",
          body,
        };
      },
    }),
    resetPassword: builder.mutation({
      query: ({ token, ...body }) => {
        return {
          url: `auth/reset/password/${token}`,
          method: "put",
          body,
        };
      },
    }),
    refreshToken: builder.query({
      query: () => {
        return {
          url: "auth/refreshToken",
          credentials: "include",
          headers,
        };
      },
    }),
    logoutUser: builder.mutation({
      query: () => {
        return {
          url: "auth/logout",
          credentials: "include",
          headers,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useSigninUserMutation,
  useSignupUserMutation,
  useSendMailForgotPasswordMutation,
  useResetPasswordMutation,
  useRefreshTokenQuery,
  useLogoutUserMutation,
} = extendedAuthApi;
