import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { InputField, Modal } from "../";

import { useUpdatePasswordMutation } from "../../redux/services/userApi";

import { BiLoaderCircle } from "react-icons/bi";

const initialState = {
  password: "",
  newPassword: "",
  confirmPassword: "",
};

const EditPasswordForm = ({ open, onClose }) => {
  const [userData, setUserData] = useState({ ...initialState });

  const handleChange = ({ target: { name, value } }) => {
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePassword(userData);
  };

  const [updatePassword, { isLoading, isSuccess, isError, error }] =
    useUpdatePasswordMutation();

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message || "Password could not be updated!");
    }
    if (isSuccess) {
      toast.success("Password updated successfully!");
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess, error]);

  return (
    <Modal open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <InputField
          type="password"
          value={userData.password}
          labelName="Current Password"
          onChange={handleChange}
          name="password"
        />
        <InputField
          type="password"
          value={userData.newPassword}
          labelName="New Passowrd"
          onChange={handleChange}
          name="newPassword"
        />
        <InputField
          type="password"
          value={userData.confirmPassword}
          labelName="Cofirm New Password"
          onChange={handleChange}
          name="confirmPassword"
          pattern={userData.newPassword}
          title="Password do not match!"
        />
        <button className="bg-blue-300 p-4 relative font-medium text-2xl rounded-lg  hover:bg-blue-500 hover:text-white ease-in duration-150 w-full text-center flex items-center gap-4 justify-center">
          {isLoading === false ? null : (
            <BiLoaderCircle
              className={`text-3xl ${isLoading ? "animate-spin" : null}`}
            />
          )}
          {isLoading ? "Processing" : "Change Password"}
        </button>
      </form>
    </Modal>
  );
};

export default EditPasswordForm;
