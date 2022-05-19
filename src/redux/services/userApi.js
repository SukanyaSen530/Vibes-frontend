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
        console.log("data", data);
        return {
          url: `${userRoute}updatedetails`,
          method: "put",
          body: data,
        };
      },
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
    getSuggestions: builder.query({
      query: () => {
        return {
          url: `${userRoute}suggestionsUser`,
        };
      },
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
