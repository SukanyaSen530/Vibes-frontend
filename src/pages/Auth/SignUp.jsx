import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import signupImage from "../../assets/images/signup.jpg";
import logo from "../../assets/images/mainLogo.png";

import InputField from "../../components/InputField/InputField";

const SignUp = () => {
  const genderOptions = ["male", "female", "other"];

  const [userData, setUserData] = useState({});

  const handleSubmit = (e) => {};

  return (
    <section className="h-screen flex">
      <div className="h-full">
        <img src={signupImage} alt="signupImage" className="h-full" />
      </div>
      <div class="flex-1 flex justify-center items-center">
        <form
          className="auth-section__form w-6/12 p-8 rounded-2xl"
          onSubmit={handleSubmit}
        >
          <img className="mx-auto w-32 h-32" src={logo} alt="VibesLogo" />
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-700">
            Create an account!
          </h2>

          <InputField
            type="text"
            labelName="Email"
            autoFocus
            required
            name="email"
          />

          <InputField type="text" labelName="Username" required />

          <div className="flex gap-8">
            <InputField
              type="password"
              labelName="Password"
              required
              name="password"
              minLength={6}
            />

            <InputField
              type="password"
              labelName="Confirm Password"
              required
              name="confirmpassword"
              minLength={6}
            />
          </div>

          <InputField
            type="dropdown"
            labelName="gender"
            options={genderOptions}
            name="gender"
          />

          <button className="bg-blue-300 my-6 p-5 text-gray-600 font-medium text-3xl rounded-lg block w-full hover:bg-blue-500 hover:text-white ease-in duration-150">
            Sign Up
          </button>

          <Link
            to="/"
            className="text-2xl font-medium text-blue-500 hover:text-blue-700 ease-in duration-150"
          >
            Already have an account? Sign In!
          </Link>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
