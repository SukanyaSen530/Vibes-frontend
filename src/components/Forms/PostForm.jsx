import { useState } from "react";
import Picker from "emoji-picker-react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import { Modal } from "../";

import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { IoIosImages } from "react-icons/io";
import { MdCancel } from "react-icons/md";

import { selectAuth } from "../../redux/slices/authSlice";

import "./post-form.scss";

const PostForm = ({ open, onClose }) => {
  const { user: loggedInUser } = useSelector(selectAuth);
  const { avatar, userName } = loggedInUser;

  //States
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [showPicker, setShowPicker] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (images.length === 0) alert("Choose atleast 1 image!");
  };

  const onEmojiClick = (e, emojiObject) => {
    setDescription((prevState) => prevState + String(emojiObject.emoji));
  };

  const handleAddImage = (e) => {
    let files = [...e.target.files];
    const finalImages = [];

    if (Array.from(files).length > 3) {
      e.preventDefault();
      alert(`Cannot upload files more than 3`);
      return;
    }

    files.forEach((file) => {
      if (file.type !== "image/jpeg" && file.type !== "image/png")
        toast.error("Currently supports only jpeg and png!");
      finalImages.push(file);
    });
    setImages((prevImages) => [...prevImages, ...finalImages]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((img, ind) => ind !== index));
  };

  // const fileUpload = (files) => {
  //   const fd = new FormData();
  //   Array.from(files).forEach((file) => {
  //     fd.append("postImages", file);
  //   });
  //   console.log(fd.postImages);
  //   return fd;
  // };

  return (
    <Modal open={open} onClose={onClose}>
      <p className="text-4xl font-semibold text-gray-700 mb-8">Create a post</p>

      <div className="flex gap-6">
        <div className="flex-1 post-form__content">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4 w-full mb-4">
              <figure className="avatar avatar-sm">
                <img
                  className="avatar-img"
                  src={avatar.secure_url}
                  alt="useravatar"
                />
              </figure>

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
            </div>

            <div className="flex gap-4 justify-end items-center mt-6">
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

              <button className="bg-blue-300 py-2 px-12 relative font-medium text-3xl rounded-lg block  hover:bg-blue-500 hover:text-white ease-in duration-150">
                Post
              </button>
            </div>
          </form>
        </div>

        {images.length ? (
          <div className="uploaded_images flex-1 scrollbar pr-4">
            {images?.map((image, index) => (
              <div className="relative my-2">
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
