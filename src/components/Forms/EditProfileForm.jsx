import { useEffect, useState } from "react";
import { Modal, InputField } from "../";

const EditProfileForm = ({ open, onClose, user }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData({ ...user });
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Modal open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <button className="bg-blue-300 p-2 relative font-medium  text-2xl rounded-lg  hover:bg-blue-500 hover:text-white ease-in duration-150 w-full text-center">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default EditProfileForm;
