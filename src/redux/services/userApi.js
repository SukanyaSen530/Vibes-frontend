import { baseApi } from "./baseApi";

export const extendedAuthApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updatePassword: builder.mutation({
      query: (body) => {
        return {
          url: "/user/updatepassword",
          method: "post",
          body,
        };
      },
    }),
    updateProfile: builder.mutation({
      query: (body) => {
        return {
          url: "/user/updatedetails",
          method: "put",
          body,
        };
      },
    }),
    followUser: builder.mutation({
      query: ({ userFollowId }) => {
        return {
          url: `user/follow/${userFollowId}`,
          method: "post",
          body: {},
        };
      },
    }),
    unFollowUser: builder.mutation({
      query: ({ userFollowId }) => {
        return {
          url: `user/unfollow/${userFollowId}`,
          method: "post",
          body: {},
        };
      },
    }),
    getUserProfile: builder.query({
      query: ({ userId }) => {
        return {
          url: `user/${userId}`,
        };
      },
    }),
    searchUsers: builder.query({
      query: ({ userName }) => {
        return {
          url: `user/serach?username=${userName}`,
        };
      },
    }),
  }),
});

export const {
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
  useUnFollowUserMutation,
  useFollowUserMutation,
  useGetUserProfileQuery,
  useSearchUsersQuery,
} = extendedAuthApi;
