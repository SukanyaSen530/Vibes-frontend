import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Icons and Images
import { signupImage, logo } from "../../assets/images";

// Custom Components
import { InputField, FullLoader } from "../../components";

//Initial State of form & gender Options
import { signUpData, genderOptions } from "./helper";

import { useSignupUserMutation } from "../../redux/services/authApi";

const SignUp = () => {
  const [signupUser, { data, isLoading, error, isError, isSuccess }] =
    useSignupUserMutation();
  
  const navigate = useNavigate();

  const [userData, setUserData] = useState({ ...signUpData });

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser(userData);
  };

  useEffect(() => {
    if (isSuccess) {
      setUserData(signUpData);
      toast.success(data?.message);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }

    if (isError) toast.error(error?.data?.message);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, data, error]);

  const handleChange = ({ target: { name, value } }) =>
    setUserData((prevState) => ({ ...prevState, [name]: value }));

  return (
    <section className="h-screen flex">
      {isLoading ? <FullLoader /> : null}

      <div className="h-full">
        <img src={signupImage} alt="signupImage" className="h-full" />
      </div>
      <div className="flex-1 flex justify-center items-center">
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
            onChange={handleChange}
            value={userData.email}
          />

          <div className="flex gap-8">
            <InputField
              type="text"
              labelName="FullName"
              required
              name="fullName"
              onChange={handleChange}
              value={userData.fullName}
            />

            <InputField
              type="text"
              labelName="Username"
              required
              name="userName"
              onChange={handleChange}
              value={userData.userName}
            />
          </div>

          <div className="flex gap-8">
            <InputField
              type="password"
              labelName="Password"
              required
              name="password"
              minLength={6}
              onChange={handleChange}
              value={userData.password}
            />

            <InputField
              type="password"
              labelName="Confirm Password"
              required
              name="confirmPassword"
              minLength={6}
              onChange={handleChange}
              value={userData.confirmPassword}
              pattern={userData.password}
              title="Password should match!"
            />
          </div>

          <InputField
            type="dropdown"
            labelName="gender"
            options={genderOptions}
            value={userData.gender}
            name="gender"
            onChange={handleChange}
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
