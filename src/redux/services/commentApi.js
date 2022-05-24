import { baseApi } from "./baseApi";

const commentRoute = "/comment/";

export const extendedCommentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query({
      query: (postId) => `${commentRoute}${postId}`,
      providesTags: ["Comments"],
    }),

    createComment: builder.mutation({
      query: (body) => {
        return {
          url: `${commentRoute}`,
          method: "post",
          body,
        };
      },
      invalidatesTags: ["Comments"],
    }),

    updateComment: builder.mutation({
      query: ({ commentId, content }) => {
        return {
          url: `${commentRoute}${commentId}`,
          method: "put",
          body: { content },
        };
      },
      invalidatesTags: ["Comments"],
    }),

    deleteComment: builder.mutation({
      query: ({ commentId, postId }) => {
        return {
          url: `${commentRoute}${commentId}/${postId}`,
          method: "delete",
        };
      },
      invalidatesTags: ["Comments"],
    }),

    likeComment: builder.mutation({
      query: (commentId) => {
        return {
          url: `${commentRoute}like/${commentId}`,
          method: "put",
          body: {},
        };
      },
      invalidatesTags: ["Comments"],
    }),

    dislikeComment: builder.mutation({
      query: (commentId) => {
        return {
          url: `${commentRoute}dislike/${commentId}`,
          method: "put",
          body: {},
        };
      },
      invalidatesTags: ["Comments"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCommentsQuery,
  useCreateCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
  useLikeCommentMutation,
  useDislikeCommentMutation,
} = extendedCommentApi;
