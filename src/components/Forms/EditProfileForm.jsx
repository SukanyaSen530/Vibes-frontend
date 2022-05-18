import { useEffect, useState } from "react";

import { Modal, InputField } from "../";

import { genderOptions } from "../../pages/Auth/helper";
import FormButton from "../Buttons/FormButton";

import { BsImage } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import { AiFillCamera } from "react-icons/ai";

import "./edit-profile-form.scss";

const EditProfileForm = ({ open, onClose, data }) => {
  const [userData, setUserData] = useState({ ...data });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddAvatar = () => {};

  const handleAddBanner = () => {};

  return (
    <Modal open={open} onClose={onClose}>
      <div className="profile-form">
        <div className="relative">
          <img
            src={data.banner.secure_url}
            alt="profile_banner"
            className="w-full rounded-lg h-64 object-fill"
          />

          <div className="profile-form__avatar flex items-end gap-4">
            <img
              src={data.avatar.secure_url}
              alt="profile_avatar"
              className="rounded-full h-44"
            />

            <label>
              <button className="bg-gray-400 py-2 px-4 text-black relative font-medium text-2xl rounded-lg hover:bg-gray-700 hover:text-white ease-in duration-150 flex gap-2 items-center">
                <AiFillCamera className="text-3xl" />
                Avatar
              </button>
              <input
                type="file"
                required
                multiple
                className="post-form__image-input"
                onChange={handleAddAvatar}
                accept="image/png, image/jpeg, image/jpg"
              />
            </label>
          </div>

          <label className="absolute top-4 right-4">
            <button className="bg-gray-400 py-2 px-4 text-black relative font-medium text-2xl rounded-lg  hover:bg-gray-700 hover:text-white ease-in duration-150 flex gap-4 items-center">
              Upload Banner
              <BsImage className="text-3xl" />
            </button>
            <input
              type="file"
              required
              multiple
              className="post-form__image-input"
              onChange={handleAddBanner}
              accept="image/png, image/jpeg, image/jpg"
            />
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <InputField
              type="text"
              labelName="FullName"
              required
              name="fullName"
              onChange={handleChange}
              value={userData.fullName}
            />

            <InputField
              type="dropdown"
              labelName="gender"
              options={genderOptions}
              value={userData.gender}
              name="gender"
              onChange={handleChange}
            />
          </div>

          <InputField
            type="text"
            labelName="Website"
            name="website"
            placeholder="Your website link here!"
            onChange={handleChange}
            value={userData.website}
          />

          <InputField
            type="textarea"
            labelName="Bio"
            name="bio"
            placeholder="Write about yourself!"
            onChange={handleChange}
            value={userData.bio}
            min={20}
            max={150}
          />

          <FormButton isLoading={false} text="Update Profile" />
        </form>
      </div>
    </Modal>
  );
};

export default EditProfileForm;
