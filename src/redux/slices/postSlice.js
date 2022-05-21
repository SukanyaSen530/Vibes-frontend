import { createSlice } from "@reduxjs/toolkit";

const postModalSlice = createSlice({
  name: "post",
  initialState: {
    isOpen: false,
    editPostData: {
      isEditModal: false,
      description: "",
      postId: 0,
    },
  },
  reducers: {
    togglePostModal: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    updateEditPostData: (state, action) => {
      state.editPostData.isEditModal = action.payload.isEditModal;
      state.editPostData.description = action.payload.description;
      state.editPostData.postId = action.payload.postId;
    },
    resetData: (state, action) => {
      state.isOpen = false;
      state.editPostData.isEditModal = false;
      state.editPostData.description = "";
      state.editPostData.postId = 0;
    },
  },
});

export const selectPostModal = (state) => state.postModal;
export const { togglePostModal, updateEditPostData, resetData } =
  postModalSlice.actions;
export default postModalSlice.reducer;
