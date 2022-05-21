import { baseApi } from "./baseApi";

const postRoute = "/post/";

export const extendedPostApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => `${postRoute}`,
      providesTags: ["Posts"],
    }),

    getPost: builder.query({
      query: (postId) => `${postRoute}/${postId}`,
    }),

    getUserPosts: builder.query({
      query: (userId) => `${postRoute}user_posts/${userId}`,
    }),

    getDiscoverPosts: builder.query({
      query: () => `${postRoute}discover`,
    }),

    createPost: builder.mutation({
      query: (body) => {
        return {
          url: `${postRoute}`,
          method: "post",
          body,
        };
      },
      invalidatesTags: ["Posts"],
    }),

    updatePost: builder.mutation({
      query: (data) => {
        return {
          url: `${postRoute}updatedetails`,
          method: "put",
          body: data,
        };
      },
    }),

    deletePost: builder.mutation({
      query: (postId) => {
        console.log("delete called", postId);
        return {
          url: `${postRoute}${postId}`,
          method: "delete",
        };
      },
      invalidatesTags: ["Posts"],
    }),

    likePost: builder.mutation({
      query: (postId) => {
        return {
          url: `${postRoute}like/${postId}`,
          method: "put",
          body: {},
        };
      },
      invalidatesTags: ["Posts"],
    }),

    dislikePost: builder.mutation({
      query: (postId) => {
        return {
          url: `${postRoute}dislike/${postId}`,
          method: "put",
          body: {},
        };
      },
      invalidatesTags: ["Posts"],
    }),

    getLikedPosts: builder.query({
      query: () => `${postRoute}liked_posts`,
    }),

    savePost: builder.mutation({
      query: (postId) => {
        return {
          url: `${postRoute}save/${postId}`,
          method: "put",
          body: {},
        };
      },
      invalidatesTags: ["Posts"],
    }),

    unsavePost: builder.mutation({
      query: (postId) => {
        return {
          url: `${postRoute}unsave/${postId}`,
          method: "put",
          body: {},
        };
      },
      invalidatesTags: ["Posts"],
    }),

    getSavedPosts: builder.query({
      query: () => `${postRoute}saved_posts`,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllPostsQuery,
  useGetUserPostsQuery,
  useGetDiscoverPostsQuery,
  useGetPostQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
  useLikePostMutation,
  useDislikePostMutation,
  useGetLikedPostsQuery,
  useSavePostMutation,
  useUnsavePostMutation,
  useGetSavedPostsQuery,
} = extendedPostApi;
