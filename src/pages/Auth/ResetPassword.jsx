import { useState, useEffect } from "react";

import loginImage from "../../assets/images/resetpass.jpg";
import logo from "../../assets/images/mainLogo.png";

import InputField from "../../components/InputField/InputField";

import "./auth.scss";

import { BiLockOpenAlt } from "react-icons/bi";

const ResetPassword = () => {
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
          />

          <InputField
            type="password"
            labelName="Confirm New Password"
            autoFocus
            required
            name="confirmPassword"
          />

          <button className="bg-blue-300 my-6 p-5 relative font-medium text-gray-600 text-3xl rounded-lg block w-full hover:bg-blue-500 hover:text-white ease-in duration-150">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <BiLockOpenAlt className="h-10 w-10" aria-hidden="true" />
            </span>
            Reset Password
          </button>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
