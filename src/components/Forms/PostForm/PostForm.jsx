import { useState, useEffect } from "react";
import Picker from "emoji-picker-react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

// Icons
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { IoIosImages } from "react-icons/io";
import { MdCancel } from "react-icons/md";

//Custom
import { Modal, FormButton } from "../..";
import { selectAuth } from "../../../redux/slices/authSlice";
import { selectPostModal } from "../../../redux/slices/postSlice";
import { togglePostModal, resetData } from "../../../redux/slices/postSlice";
import { fileUpload } from "../helper";
import { useCreatePostMutation } from "../../../redux/services/postApi";
import { useUpdatePostMutation } from "../../../redux/services/postApi";

import "./post-form.scss";

const PostForm = () => {
  // States
  const { user: loggedInUser } = useSelector(selectAuth);
  const { avatar, userName, fullName } = loggedInUser;
  const dispatch = useDispatch();
  const {
    isOpen,
    editPostData: { isEditModal, description: updatedDescription, postId },
  } = useSelector(selectPostModal);
  const [description, setDescription] = useState(updatedDescription);
  const [images, setImages] = useState([]);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    setDescription(updatedDescription);
  }, [updatedDescription]);

  // Functions
  const handleCloseModal = () => {
    dispatch(togglePostModal());
    dispatch(resetData());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditModal) {
      updatePost({ description, postId });
    } else {
      if (images.length === 0) alert("Choose atleast 1 image!");
      const formData = fileUpload(images);
      formData.append("description", description);
      createPost(formData);
    }
  };

  const onEmojiClick = (e, emojiObject) => {
    setDescription((prevState) => prevState + String(emojiObject.emoji));
  };

  const handleAddImage = (e) => {
    let files = [...e.target.files];
    const finalImages = [];
    if (files.length > 3) {
      e.preventDefault();
      alert(`Cannot upload files more than 3`);
      return;
    }
    files.forEach((file) => {
      if (
        file.type !== "image/jpeg" &&
        file.type !== "image/png" &&
        file.type !== "image/jpg"
      )
        toast.error("Currently supports only jpeg and png!");
      finalImages.push(file);
    });
    setImages((prevImages) => [...prevImages, ...finalImages]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((img, ind) => ind !== index));
  };

  // Mutations
  const [
    createPost,
    {
      isLoading: createPostLoading,
      isError: createPostIsError,
      isSuccess: createPostIsSuccess,
      error: createPostError,
    },
  ] = useCreatePostMutation();

  useEffect(() => {
    if (createPostIsSuccess) {
      toast.success("Post created!");
      handleCloseModal();
    }

    if (createPostIsError) {
      toast.error(
        createPostError?.data?.message || "Post could not be created!"
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createPostLoading, createPostIsError, createPostError]);

  const [
    updatePost,
    {
      isLoading: updatePostLoading,
      isError: updatePostIsError,
      isSuccess: updatePostIsSuccess,
      error: updatePostError,
    },
  ] = useUpdatePostMutation();

  useEffect(() => {
    if (updatePostIsSuccess) {
      toast.success("Post Updated!");
      handleCloseModal();
    }

    if (updatePostIsError) {
      toast.error(
        updatePostError?.data?.message || "Post could not be updated!"
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatePostLoading, updatePostIsError, updatePostError]);

  return (
    <Modal open={isOpen} onClose={handleCloseModal}>
      <p className="text-4xl font-semibold text-gray-700 mb-8">
        {" "}
        {isEditModal ? "Update the" : "Create a"} post!{" "}
      </p>

      <div className="flex gap-6">
        <div className="flex-1 post-form__content">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4 items-center mb-4">
              <figure className="avatar avatar-sm">
                <img
                  className="avatar-img"
                  src={avatar.secure_url}
                  alt="useravatar"
                />
              </figure>
              <div>
                <p className="leading-normal text-3xl">{userName}</p>
                <p className="leading-normal text-xl">{fullName}</p>
              </div>
            </div>

            <textarea
              required
              onChange={({ target: { value } }) => setDescription(value)}
              name="content"
              value={description}
              placeholder={`${userName}, What's on your mind?`}
              maxLength={200}
              minLength={10}
              autoFocus
              className="post-form__textarea flex-1 focus:border-blue-300 duration-150"
            />

            <div className="flex gap-6 justify-end items-center mt-6">
              <p
                className={`font-semibold text-2xl ${
                  description?.length === 200 ? "text-red-600" : ""
                }`}
              >
                ({description.length} / {200 - description.length})
              </p>

              <div className="relative">
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

              {!isEditModal ? (
                <label>
                  <IoIosImages className="icons" />
                  <input
                    type="file"
                    required
                    multiple
                    className="post-form__image-input"
                    onChange={handleAddImage}
                    accept="image/png, image/jpeg, image/jpg"
                  />
                </label>
              ) : null}

              <FormButton
                text={!isEditModal ? "Post" : "Update"}
                classes="py-2 px-10 block"
                isLoading={createPostLoading || updatePostLoading}
              />
            </div>
          </form>
        </div>

        {images.length ? (
          <div className="uploaded_images flex-1 scrollbar pr-4">
            {images?.map((image, index) => (
              <div className="relative my-2" key={index}>
                <img
                  src={URL.createObjectURL(image)}
                  alt={`uploaded-${index}`}
                />
                <MdCancel
                  className="absolute top-1 right-1 text-5xl cursor-pointer text-red-500"
                  onClick={() => handleRemoveImage(index)}
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </Modal>
  );
};

export default PostForm;
