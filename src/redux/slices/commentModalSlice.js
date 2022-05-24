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
    toggleCommentModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    updateEditCommentData: (state, action) => {
      state.editCommentData.isEditModal = true;
      state.editCommentData.content = action.payload.content;
      state.editCommentData.commentId = action.payload.commentId;
    },
    resetCommentData: (state) => {
      state.isOpen = false;
      state.editCommentData.isEditModal = false;
      state.editCommentData.content = "";
      state.editCommentData.commentId = 0;
    },
  },
});

export const selectCommentModal = (state) => state.commentModal;
export const { toggleCommentModal, updateEditCommentData, resetCommentData } =
  commentModalSlice.actions;
export default commentModalSlice.reducer;
