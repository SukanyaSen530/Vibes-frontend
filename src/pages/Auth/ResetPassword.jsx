import { useState } from "react";

// Icons and Images
import { resetPasswordImage, logo } from "../../assets/images";
import { BiLockAlt } from "react-icons/bi";

// Custom Components
import { InputField } from "../../components";

//Initial State of form
import { resetPasswordData } from "./helper";

const ResetPassword = () => {
  const [userData, setUserData] = useState({ ...resetPasswordData });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);

    setTimeout(() => {
      setUserData({ ...resetPasswordData });
    }, 2000);
  };

  const handleChange = ({ target: { name, value } }) =>
    setUserData((prevState) => ({ ...prevState, [name]: value }));

  return (
    <section className="auth-section h-screen flex">
      <div className="h-full">
        <img
          src={resetPasswordImage}
          alt="loginImage"
          className="h-full w-full"
        />
      </div>

      <div className="flex-1 flex justify-center items-center">
        <form
          className="auth-section__form w-6/12 p-8 rounded-2xl"
          onSubmit={handleSubmit}
        >
          <img className="mx-auto w-32 h-32" src={logo} alt="VibesLogo" />
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-700">
            Set new password
          </h2>

          <InputField
            type="password"
            labelName="New Password"
            autoFocus
            required
            name="password"
            onChange={handleChange}
            value={userData.password}
          />

          <InputField
            type="password"
            labelName="Confirm New Password"
            autoFocus
            required
            name="confirmPassword"
            onChange={handleChange}
            pattern={userData.password}
            title="Email should match!"
            value={userData.confirmPassword}
          />

          <button className="bg-blue-300 my-6 p-5 relative font-medium text-gray-600 text-3xl rounded-lg block w-full hover:bg-blue-500 hover:text-white ease-in duration-150">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <BiLockAlt className="h-10 w-10" aria-hidden="true" />
            </span>
            Reset Password
          </button>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
