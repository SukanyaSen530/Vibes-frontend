import { baseApi } from "./baseApi";

const commentRoute = "/comment/";

export const extendedCommentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => `${commentRoute}`,
      providesTags: ["Comment"],
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
      query: ({ commentId, ...data }) => {
        return {
          url: `${commentRoute}${commentId}`,
          method: "put",
          body: data,
        };
      },
      invalidatesTags: ["Comments"],
    }),

    deleteComment: builder.mutation({
      query: (commentId) => {
        return {
          url: `${commentRoute}${commentId}`,
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
