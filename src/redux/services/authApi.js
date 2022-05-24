import { baseApi } from "./baseApi";

const mode = "prod";
const clientUrl =
  mode === "dev"
    ? "http://localhost:3000"
    : "https://vibes--frontend.vercel.app";

const headers = new Headers();
headers.append("Access-Control-Allow-Origin", clientUrl);
headers.append("Access-Control-Allow-Credentials", "true");
headers.append(
  "Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CSRF-Token"
);
headers.append("Access-Control-Allow-Methods", "GET,POST");

const authRoute = "/auth/";

export const extendedAuthApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signinUser: builder.mutation({
      query: (body) => {
        return {
          url: `${authRoute}signin`,
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
          url: `${authRoute}signup`,
          method: "post",
          body,
        };
      },
    }),

    sendMailForgotPassword: builder.mutation({
      query: (body) => {
        return {
          url: `${authRoute}forgotpassword`,
          method: "post",
          body,
        };
      },
    }),

    resetPassword: builder.mutation({
      query: ({ token, ...body }) => {
        return {
          url: `${authRoute}reset/password/${token}`,
          method: "put",
          body,
        };
      },
    }),

    refreshToken: builder.query({
      query: () => {
        return {
          url: `${authRoute}refreshToken`,
          method: "get",
          credentials: "include",
          headers,
        };
      },
    }),

    logoutUser: builder.mutation({
      query: () => {
        return {
          url: `${authRoute}logout`,
          method: "post",
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
  // useRefreshTokenMutation,
  useRefreshTokenQuery,
  useLogoutUserMutation,
} = extendedAuthApi;
