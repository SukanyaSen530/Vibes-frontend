import { useState, useEffect } from "react";
import Picker from "emoji-picker-react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

// Icons
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";

//Custom
import useClickOutside from "../../../hooks/useClickOutside";
import { Modal, FormButton, UserDetail } from "../..";
import { selectAuth } from "../../../redux/slices/authSlice";

import "./comment-form.scss";

const CommentForm = ({ open, onClose, commentContent }) => {
  // States
  const { user: loggedInUser } = useSelector(selectAuth);
  const { avatar, userName, fullName, _id: loggedInUserId } = loggedInUser;
  const [content, setContent] = useState(commentContent ? commentContent : "");
  const [showPicker, setShowPicker] = useState(false);
  const domNode = useClickOutside(() => setShowPicker(false));

  // Functions
  const handleCloseModal = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onEmojiClick = (e, emojiObject) => {
    setContent((prevState) => prevState + String(emojiObject.emoji));
  };

  // Mutations
  //   const [
  //     createPost,
  //     {
  //       isLoading: createPostLoading,
  //       isError: createPostIsError,
  //       isSuccess: createPostIsSuccess,
  //       error: createPostError,
  //     },
  //   ] = useCreatePostMutation();

  //   const [
  //     updatePost,
  //     {
  //       isLoading: updatePostLoading,
  //       isError: updatePostIsError,
  //       isSuccess: updatePostIsSuccess,
  //       error: updatePostError,
  //     },
  //   ] = useUpdatePostMutation();

  return (
    <Modal open={open} onClose={onClose}>
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
              maxLength={200}
              minLength={10}
              autoFocus
              className="post-form__textarea flex-1 focus:border-blue-300 duration-150"
            />

            <div className="flex gap-6 justify-end items-center mt-6">
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
                text={!commentContent ? "Comment" : "Update Comment"}
                classes="py-2 px-10 block"
                // isLoading={createPostLoading || updatePostLoading}
              />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default CommentForm;
