import { useState } from "react";
import { Link } from "react-router-dom";

// Icons and Images
import { signinImage, logo } from "../../assets/images";

// Custom Components
import { InputField } from "../../components";

//Initial State of form
import { signInData } from "./helper";

// Styles
import "./auth.scss";

const SignIn = () => {
  const [userData, setUserData] = useState({ ...signInData });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);

    setTimeout(() => {
      setUserData({ ...signInData });
    }, 2000);
  };

  const handleChange = ({ target: { name, value } }) =>
    setUserData((prevState) => ({ ...prevState, [name]: value }));

  return (
    <section className="auth-section h-screen flex">
      <div className="h-full">
        <img src={signinImage} alt="loginImage" className="h-full w-full" />
      </div>

      <div className="flex-1 flex justify-center items-center">
        <form
          className="auth-section__form w-6/12 p-8 rounded-2xl"
          onSubmit={handleSubmit}
        >
          <img className="mx-auto w-32 h-32" src={logo} alt="VibesLogo" />
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-700">
            Sign in to your account!
          </h2>

          <InputField
            type="text"
            labelName="Email / Username"
            autoFocus
            required
            name="emailusername"
            onChange={handleChange}
            value={userData.emailusername}
          />
          <InputField
            type="password"
            labelName="Password"
            required
            minLength={6}
            name="password"
            onChange={handleChange}
            value={userData.password}
          />

          <button className="bg-blue-300 my-6 p-5 font-medium text-gray-600 text-3xl rounded-lg block w-full hover:bg-blue-500 hover:text-white ease-in duration-150">
            Sign In
          </button>

          <div className="flex justify-between">
            <Link
              to="/forgotpassword"
              className="text-2xl font-medium text-gray-500 hover:text-blue-500 ease-in duration-150"
            >
              Forgot your password?
            </Link>

            <Link
              to="/signup"
              className="text-2xl font-medium text-blue-500 hover:text-blue-700 ease-in duration-150"
            >
              Don't have an account? Sign Up!
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
