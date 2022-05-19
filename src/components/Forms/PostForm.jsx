import { useState, useEffect } from "react";
import Picker from "emoji-picker-react";
import { toast } from "react-toastify";

import { Modal, InputField } from "../";

import { BsFillEmojiHeartEyesFill, BsImages } from "react-icons/bs";
import { FcCancel } from "react-icons/fc";

import "./post-form.scss";

const initialData = {
  content: "",
};

const PostForm = ({ open, onClose }) => {
  const [postData, setPostData] = useState({ ...initialData });
  const [images, setImages] = useState([]);

  const [showPicker, setShowPicker] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onEmojiClick = (e, emojiObject) => {
    setPostData((prevState) => ({
      ...prevState,
      content: prevState.content + String(emojiObject.emoji),
    }));
  };

  const handleChange = ({ target: { name, value } }) => {
    setPostData((prevState) => ({ ...prevState, [name]: value }));
  };

  const fileUpload = (files) => {
    const fd = new FormData();
    Array.from(files).forEach((file) => {
      fd.append("postImages", file);
    });
    console.log(fd.postImages);
    return fd;
  };

  const handleAddImage = (e) => {
    let files = [...e.target.files];
    const finalImages = [];

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

  return (
    <Modal open={open} onClose={onClose}>
      <p className="text-4xl font-semibold text-gray-700 mb-8">Create a post</p>
      <div className="flex gap-6">
        {images.length ? (
          <div className="uploaded_images flex-1">
            {images?.map((image, index) => (
              <div className="relative">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`uploaded-${index}`}
                />
                <FcCancel
                  className="absolute top-1 right-1 text-4xl cursor-pointer"
                  onClick={() => handleRemoveImage(index)}
                />
              </div>
            ))}
          </div>
        ) : null}
        <div className="flex-1 post-form__content">
          <form onSubmit={handleSubmit}>
            <InputField
              type="textarea"
              required
              onChange={handleChange}
              name="content"
              value={postData.content}
              placeholder="What's on your mind?"
              maxLength={150}
              minLength={10}
              autoFocus
            />

            <div className="flex justify-between">
              <label>
                <BsImages className="icons" />
                <input
                  type="file"
                  required
                  multiple
                  className="post-form__image-input"
                  onChange={handleAddImage}
                  accept="image/png, image/jpeg, image/jpg"
                />
              </label>

              <BsFillEmojiHeartEyesFill
                className="icons text-amber-500"
                onClick={() => setShowPicker((val) => !val)}
              />
            </div>
            <button className=" bg-blue-300 my-6 p-2 relative font-medium text-3xl rounded-lg block w-full hover:bg-blue-500 hover:text-white ease-in duration-150">
              Post
            </button>
          </form>

          {showPicker ? (
            <Picker
              onEmojiClick={onEmojiClick}
              pickerStyle={{ width: "100%", height: "18rem" }}
            />
          ) : null}
        </div>
      </div>
    </Modal>
  );
};;

export default PostForm;
