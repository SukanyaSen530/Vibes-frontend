import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import loginImage from "../../assets/images/login1.jpg";
import InputField from "../../components/InputField/InputField";

import "./auth.scss";

import logo from "../../assets/images/logo.png";

const SignIn = () => {
  const handleSubmit = (e) => {};

  return (
    <section className="auth-section h-screen flex">
      <div className="h-full">
        <img src={loginImage} alt="loginImage" className="h-full w-full" />
      </div>

      <div class="flex-1 flex justify-center items-center">
        <form
          className="auth-section__form w-6/12 p-8 rounded-2xl"
          onSubmit={handleSubmit}
        >
          <img className="mx-auto h-16 w-auto" src={logo} alt="Workflow" />
          <h2 className="m-8 text-center text-3xl font-bold text-gray-700">
            Sign in to your account
          </h2>

          <InputField
            type="text"
            labelName="Email / Username"
            autoFocus
            required
          />
          <InputField
            type="password"
            labelName="Password"
            required
            minLength={6}
          />

          <Link
            to="/forgotpassword"
            className="text-2xl font-medium text-gray-500 hover:text-blue-500 ease-in duration-150"
          >
            Forgot your password?
          </Link>

          <button className="bg-blue-300 my-6 p-5 font-medium text-3xl rounded-lg block w-full hover:bg-blue-500 hover:text-white ease-in duration-150">
            Sign In
          </button>

          <Link
            to="/signup"
            className="text-2xl font-medium text-blue-500 hover:text-blue-700 ease-in duration-150"
          >
            Don't have an account? Sign Up!
          </Link>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
