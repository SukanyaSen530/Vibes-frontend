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
    setShowPicker(false);
  };

  const handleChange = ({ target: { name, value } }) => {
    setPostData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddImage = (e) => {
    let files = [...e.target.files];
    const finalImages = [];
    console.log(e.target.files);

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

  useEffect(() => {
    console.log(postData);
  }, [postData]);

  return (
    <Modal open={open} onClose={onClose}>
      <p className="post-header text-4xl font-semibold text-gray-700 mb-8">
        Create a post
      </p>
      <div className="">
        <form onSubmit={handleSubmit}>
          <InputField
            type="textarea"
            required
            onChange={handleChange}
            name="content"
            value={postData.content}
            labelName="What's on your mind?"
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
              />
            </label>

            <BsFillEmojiHeartEyesFill
              className="icons text-amber-500"
              onClick={() => setShowPicker(true)}
            />
          </div>
          <button className=" bg-blue-300 my-6 p-2 relative font-medium text-3xl rounded-lg block w-full hover:bg-blue-500 hover:text-white ease-in duration-150">
            Post
          </button>
        </form>

        {images.length ? (
          <div className="uploaded_images">
            {images?.map((image, index) => (
              <div className="relative">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`uploaded-${index}`}
                  className="h-38 w-44"
                />
                <FcCancel
                  className="absolute top-1 right-1 text-4xl cursor-pointer"
                  onClick={() => handleRemoveImage(index)}
                />
              </div>
            ))}
          </div>
        ) : null}

        {showPicker ? (
          <Picker
            onEmojiClick={onEmojiClick}
            pickerStyle={{ width: "100%", height: "18rem" }}
          />
        ) : null}
      </div>
    </Modal>
  );
};

export default PostForm;
