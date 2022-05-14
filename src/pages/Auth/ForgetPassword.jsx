import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import loginImage from "../../assets/images/forgotpassword1.jpg";
import logo from "../../assets/images/logo.png";

import InputField from "../../components/InputField/InputField";

import "./auth.scss";

const ForgetPassword = () => {
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
            Send password reset link
          </h2>

          <InputField type="email" labelName="Email" autoFocus required />

          <button className="bg-blue-300 my-6 p-5 font-medium text-3xl rounded-lg block w-full hover:bg-blue-500 hover:text-white ease-in duration-150">
            Get Link
          </button>
        </form>
      </div>
    </section>
  );
};

export default ForgetPassword;
