import { baseApi } from "./baseApi";

const userRoute = "/user/";

export const extendedUserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updatePassword: builder.mutation({
      query: (body) => {
        return {
          url: `${userRoute}updatepassword`,
          method: "post",
          body,
        };
      },
    }),
    updateProfile: builder.mutation({
      query: (body) => {
        return {
          url: `${userRoute}updatedetails`,
          method: "put",
          body,
        };
      },
    }),
    followUser: builder.mutation({
      query: ({ userFollowId }) => {
        return {
          url: `${userRoute}follow/${userFollowId}`,
          method: "post",
          body: {},
        };
      },
    }),
    unFollowUser: builder.mutation({
      query: ({ userFollowId }) => {
        return {
          url: `${userRoute}unfollow/${userFollowId}`,
          method: "post",
          body: {},
        };
      },
    }),
    getUserProfile: builder.query({
      query: ({ userId }) => {
        return {
          url: `${userRoute}${userId}`,
        };
      },
    }),
    searchUsers: builder.query({
      query: ({ userName }) => {
        return {
          url: `${userRoute}serach?username=${userName}`,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
  useUnFollowUserMutation,
  useFollowUserMutation,
  useGetUserProfileQuery,
  useSearchUsersQuery,
} = extendedUserApi;
