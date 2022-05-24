import { useState, useEffect } from "react";
import Picker from "emoji-picker-react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

// Icons
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";

//Custom
import useClickOutside from "../../../hooks/useClickOutside";
import { selectCommentModal } from "../../../redux/slices/commentModalSlice";

import {
  toggleCommentModal,
  resetCommentData,
} from "../../../redux/slices/commentModalSlice";

import { Modal, FormButton, UserDetail } from "../..";
import { selectAuth } from "../../../redux/slices/authSlice";

import { useCreateCommentMutation } from "../../../redux/services/commentApi";
import { useUpdateCommentMutation } from "../../../redux/services/commentApi";

import "./comment-form.scss";

const CommentForm = ({ postId }) => {
  // States
  const dispatch = useDispatch();
  const { user: loggedInUser } = useSelector(selectAuth);
  const { avatar, userName, fullName, _id: loggedInUserId } = loggedInUser;
  const {
    isOpen,
    editCommentData: { isEditModal, content: contentToUpdate, commentId },
  } = useSelector(selectCommentModal);

  const [content, setContent] = useState(
    contentToUpdate ? contentToUpdate : ""
  );
  const [showPicker, setShowPicker] = useState(false);
  const domNode = useClickOutside(() => setShowPicker(false));

  // Mutations
  const [
    createComment,
    {
      isLoading: createCommentLoading,
      isError: createCommentIsError,
      isSuccess: createCommentIsSuccess,
      error: createCommentError,
    },
  ] = useCreateCommentMutation();

  const [
    updateComment,
    {
      isLoading: updateCommentLoading,
      isError: updateCommentIsError,
      isSuccess: updateCommentIsSuccess,
      error: updateCommentError,
    },
  ] = useUpdateCommentMutation();

  useEffect(() => {
    setContent(contentToUpdate);
  }, [contentToUpdate]);

  // Functions
  const handleCloseModal = () => {
    dispatch(toggleCommentModal());
    dispatch(resetCommentData());
    setContent("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditModal) {
      updateComment({ commentId, content });
      handleCloseModal();
    } else {
      createComment({ postId, content });
      handleCloseModal();
    }
  };

  const onEmojiClick = (e, emojiObject) => {
    setContent((prevState) => prevState + String(emojiObject.emoji));
  };

  useEffect(() => {
    if (createCommentIsSuccess) {
      toast.success("Comment added");
    }

    if (createCommentIsError) {
      toast.error(
        createCommentError?.data?.message || "Comment could not be added!"
      );
    }
  }, [createCommentIsError, createCommentIsSuccess, createCommentError]);

  useEffect(() => {
    if (updateCommentIsSuccess) {
      toast.success("Comment added");
    }

    if (updateCommentIsError) {
      toast.error(
        updateCommentError?.data?.message || "Comment could not be added!"
      );
    }
  }, [updateCommentIsError, updateCommentIsSuccess, updateCommentError]);

  return (
    <Modal open={isOpen} onClose={handleCloseModal}>
      <div className="flex gap-6">
        <div className="flex-1 post-form__content">
          <form onSubmit={handleSubmit}>
            <UserDetail
              avatar={avatar}
              id={loggedInUserId}
              fullName={fullName}
              userName={userName}
            />

            <textarea
              required
              onChange={({ target: { value } }) => setContent(value)}
              name="content"
              value={content}
              placeholder={`${userName}, write a comment for the post!`}
              maxLength={400}
              minLength={10}
              autoFocus
              className="post-form__textarea flex-1 focus:border-blue-300 duration-150"
            />

            <div className="flex gap-6 justify-end items-center mt-6">
              <p
                className={`font-semibold text-2xl ${
                  content?.length === 400 ? "text-red-600" : ""
                }`}
              >
                ({content.length} / {400 - content.length})
              </p>

              <div className="relative" ref={domNode}>
                <BsFillEmojiHeartEyesFill
                  className="icons text-amber-500"
                  onClick={() => setShowPicker((val) => !val)}
                />

                {showPicker ? (
                  <div className="post-form__emoji-picker">
                    <Picker
                      disableSearchBar
                      disableSkinTonePicker
                      onEmojiClick={onEmojiClick}
                      pickerStyle={{ height: "18rem" }}
                    />
                  </div>
                ) : null}
              </div>

              <FormButton
                text={!isEditModal ? "Comment" : "Update Comment"}
                classes="py-2 px-10 block"
                isLoading={createCommentLoading || updateCommentLoading}
              />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default CommentForm;
