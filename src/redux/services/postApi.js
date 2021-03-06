import { baseApi } from "./baseApi";

const postRoute = "/post/";

export const extendedPostApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => `${postRoute}`,
      providesTags: ["Posts", "Users"],
    }),

    getPost: builder.query({
      query: (postId) => `${postRoute}${postId}`,
      providesTags: ["Posts", "Comments"],
    }),

    getUserPosts: builder.query({
      query: (userId) => `${postRoute}user_posts/${userId}`,
      providesTags: ["Posts"],
    }),

    getDiscoverPosts: builder.query({
      query: () => `${postRoute}discover`,
      providesTags: ["Posts", "Users"],
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
      query: ({ postId, ...data }) => {
        return {
          url: `${postRoute}${postId}`,
          method: "put",
          body: data,
        };
      },
      invalidatesTags: ["Posts", "Users"],
    }),

    deletePost: builder.mutation({
      query: (postId) => {
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
      providesTags: ["Posts"],
    }),

    savePost: builder.mutation({
      query: (postId) => {
        return {
          url: `${postRoute}save/${postId}`,
          method: "put",
          body: {},
        };
      },
    }),

    unsavePost: builder.mutation({
      query: (postId) => {
        return {
          url: `${postRoute}unsave/${postId}`,
          method: "put",
          body: {},
        };
      },
    }),

    getSavedPosts: builder.query({
      query: () => `${postRoute}saved_posts`,
      providesTags: ["Posts"],
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
