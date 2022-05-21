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
      query: (data) => {
        return {
          url: `${userRoute}updatedetails`,
          method: "put",
          body: data,
        };
      },
      invalidatesTags: ["Users"],
    }),

    followUser: builder.mutation({
      query: (userFollowId) => {
        return {
          url: `${userRoute}follow/${userFollowId}`,
          method: "put",
          body: {},
        };
      },
      invalidatesTags: ["Users"],
    }),

    unFollowUser: builder.mutation({
      query: (userFollowId) => {
        return {
          url: `${userRoute}unfollow/${userFollowId}`,
          method: "put",
          body: {},
        };
      },
      invalidatesTags: ["Users"],
    }),

    getUserProfile: builder.query({
      query: (userId) => `${userRoute}${userId}`,
      providesTags: ["Users"],
    }),

    searchUsers: builder.query({
      query: (userName) => `${userRoute}search?username=${userName}`,
    }),

    getSuggestions: builder.query({
      query: () => `${userRoute}suggestionsUser`,
      providesTags: ["Users"],
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
  useGetSuggestionsQuery,
} = extendedUserApi;
