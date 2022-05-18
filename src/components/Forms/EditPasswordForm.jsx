import { useState } from "react";

import { InputField, Modal } from "../";

const initialState = {
  password: "",
  newPassword: "",
  confirmPassword: "",
};

const EditPasswordForm = ({ open, onClose }) => {
  const [userData, setUserData] = useState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Modal open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <InputField
          type="password"
          value={userData.password}
          labelName="Current Password"
          onChange={handleChange}
        />
        <InputField
          type="password"
          value={userData.newPassword}
          labelName="New Passowrd"
          onChange={handleChange}
        />
        <InputField
          type="password"
          value={userData.confirmPassword}
          labelName="Cofirm New Password"
          onChange={handleChange}
        />
        <button className="bg-blue-300 p-2 relative font-medium  text-2xl rounded-lg  hover:bg-blue-500 hover:text-white ease-in duration-150 w-full text-center">
          Change Password
        </button>
      </form>
    </Modal>
  );
};

export default EditPasswordForm;
