import { useState } from "react";
import { Link } from "react-router-dom";

// Icons and Images
import { BiLockOpenAlt } from "react-icons/bi";
import { forgetPasswordImage, logo } from "../../assets/images";

// Custom Components
import { InputField } from "../../components";

//Initial State of form
import { forgotPasswordData } from "./helper";

const ForgetPassword = () => {

  const [userData, setUserData] = useState({ ...forgotPasswordData });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);

    setTimeout(() => {
      setUserData({ ...forgotPasswordData });
    }, 2000);
  };

  const handleChange = ({ target: { name, value } }) =>
    setUserData((prevState) => ({ ...prevState, [name]: value }));

  return (
    <section className="auth-section h-screen flex">
      <div className="h-full">
        <img
          src={forgetPasswordImage}
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
            Send password reset link
          </h2>

          <InputField
            type="email"
            labelName="Email"
            autoFocus
            required
            name="email"
            onChange={handleChange}
            value={userData.email}
          />

          <InputField
            type="email"
            labelName="Confirm Email"
            autoFocus
            required
            name="confirmEmail"
            onChange={handleChange}
            pattern={userData.email}
            title="Email should match!"
            value={userData.confirmEmail}
          />

          <div className="flex justify-between">
            <Link
              to="/"
              className="text-2xl font-medium text-gray-500 hover:text-blue-500 ease-in duration-150"
            >
              Sign In!
            </Link>

            <Link
              to="/signup"
              className="text-2xl font-medium text-blue-500 hover:text-blue-700 ease-in duration-150"
            >
              Sign Up!
            </Link>
          </div>

          <button className="bg-blue-300 my-6 p-5 relative font-medium text-gray-600 text-3xl rounded-lg block w-full hover:bg-blue-500 hover:text-white ease-in duration-150">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <BiLockOpenAlt className="h-10 w-10" aria-hidden="true" />
            </span>
            Get Link
          </button>
        </form>
      </div>
    </section>
  );
};

export default ForgetPassword;
