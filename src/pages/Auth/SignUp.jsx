import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import signupImage from "../../assets/images/signup1.jpg";
import logo from "../../assets/images/logo.png";

import InputField from "../../components/InputField/InputField";

const SignUp = () => {
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
          <img className="mx-auto h-16 w-auto" src={logo} alt="Workflow" />
          <h2 className="m-8 text-center text-3xl font-bold text-gray-700">
            Create an account!
          </h2>

          <InputField
            type="text"
            labelName="Email / Username"
            autoFocus
            required
          />

          <InputField type="text" labelName="Username" required />

          <InputField
            type="password"
            labelName="Password"
            required
            minLength={6}
          />

          <InputField
            type="password"
            labelName="Confirm Password"
            required
            minLength={6}
          />

          <button className="bg-blue-300 my-6 p-5 font-medium text-3xl rounded-lg block w-full hover:bg-blue-500 hover:text-white ease-in duration-150">
            Sign In
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
