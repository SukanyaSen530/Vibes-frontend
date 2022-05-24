import { createSlice } from "@reduxjs/toolkit";

const commentModalSlice = createSlice({
  name: "commentModal",
  initialState: {
    isOpen: false,
    editCommentData: {
      isEditModal: false,
      content: "",
      commentId: 0,
    },
  },
  reducers: {
    toggleCommentModal: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    updateEditCommentData: (state, action) => {
      state.editCommentData.isEditModal = true;
      state.editCommentData.content = action.payload.content;
      state.editCommentData.commentId = action.payload.commentId;
    },
    resetCommentData: (state, action) => {
      state.isOpen = false;
      state.editPostData.isEditModal = false;
      state.editPostData.content = "";
      state.editPostData.commentId = 0;
    },
  },
});

export const selectCommentModal = (state) => state.commentModal;
export const { toggleCommentModal, updateEditCommentData, resetCommentData } =
  commentModalSlice.actions;
export default commentModalSlice.reducer;
