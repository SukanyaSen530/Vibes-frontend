import { baseApi } from "./baseApi";

export const extendedAuthApi = baseApi.injectEndpoints({
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
          url: `auth/reset/password/${token}`,
          method: "put",
          body,
        };
      },
    }),
    refreshToken: builder.query({
      query: () => "/refreshToken",
    }),
  }),
});

export const {
  useSigninUserMutation,
  useSignupUserMutation,
  useSendMailForgotPasswordMutation,
  useResetPasswordMutation,
  useRefreshTokenQuery,
} = extendedAuthApi;
