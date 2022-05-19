import { useState, useEffect } from "react";
import { toast } from "react-toastify";

//Custom Components
import { InputField, Modal , FormButton} from "../";

//RTK Query
import { useUpdatePasswordMutation } from "../../redux/services/userApi";

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

        <FormButton isLoading={isLoading} text='Change Password'/>
      </form>
    </Modal>
  );
};

export default EditPasswordForm;
