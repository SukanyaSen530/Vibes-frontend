import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Modal, InputField, FormButton } from "../";

import { BsImage } from "react-icons/bs";
import { AiFillCamera } from "react-icons/ai";

import { genderOptions } from "../../pages/Auth/helper";

import "./edit-profile-form.scss";

import { useUpdateProfileMutation } from "../../redux/services/userApi";

const EditProfileForm = ({ open, onClose, user }) => {
  const [userData, setUserData] = useState({
    avatar: null,
    banner: null,
    fullName: user?.fullName || "",
    gender: user?.gender || "",
    bio: user?.bio || "",
    website: user?.website || "",
  });

  const [updateProfile, { isLoading, isSuccess, isError, error }] =
    useUpdateProfileMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(userData).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });
    updateProfile(formData);
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImage = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.files[0],
    }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message || "Profile could not be updated!");
    }
    if (isSuccess) {
      toast.success("Profile updated successfully!");
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess, error]);

  return (
    <Modal open={open} onClose={onClose}>
      <div className="profile-form">
        <div className="relative">
          <img
            src={
              userData.banner
                ? URL.createObjectURL(userData.banner)
                : user.banner.secure_url
            }
            alt="profile_banner"
            className="w-full rounded-lg h-64 object-fill"
          />

          <div className="profile-form__avatar flex items-end gap-4">
            <img
              src={
                userData.avatar
                  ? URL.createObjectURL(userData.avatar)
                  : user.avatar.secure_url
              }
              alt="profile_avatar"
              className="rounded-full h-44 w-44"
            />

            <label>
              <p className="bg-gray-400 py-2 px-4 text-black relative font-medium text-2xl rounded-lg hover:bg-gray-700 hover:text-white ease-in duration-150 flex gap-2 items-center cursor-pointer">
                <AiFillCamera className="text-3xl" />
                Avatar
              </p>

              <input
                type="file"
                required
                name="avatar"
                className="post-form__image-input"
                onChange={handleImage}
                accept="image/png, image/jpeg, image/jpg"
              />
            </label>
          </div>

          <label className="absolute top-4 right-4">
            <p className="bg-gray-400 py-2 px-4 text-black relative font-medium text-2xl rounded-lg  hover:bg-gray-700 hover:text-white ease-in duration-150 flex gap-4 items-center cursor-pointer">
              Upload Banner
              <BsImage className="text-3xl" />
            </p>

            <input
              type="file"
              required
              className="post-form__image-input"
              name="banner"
              onChange={handleImage}
              accept="image/png, image/jpeg, image/jpg"
            />
          </label>
        </div>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
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

          <FormButton isLoading={isLoading} text="Update Profile" />
        </form>
      </div>
    </Modal>
  );
};

export default EditProfileForm;
