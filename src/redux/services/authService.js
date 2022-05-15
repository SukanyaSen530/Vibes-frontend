import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:8000";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    signinUser: builder.mutation({
      query: (body) => {
        return {
          url: "/auth/signin",
          method: "post",
          body,
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
          url: `/reset/password/${token}`,
          method: "put",
          body,
        };
      },
    }),
  }),
});

export const {
  useSigninUserMutation,
  useSignupUserMutation,
  useSendMailForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
