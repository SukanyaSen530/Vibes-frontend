import { useState } from "react";
import { Link } from "react-router-dom";

// Icons and Images
import { signupImage, logo } from "../../assets/images";

// Custom Components
import { InputField } from "../../components";

//Initial State of form & gender Options
import { signUpData, genderOptions } from "./helper";

const SignUp = () => {
  const [userData, setUserData] = useState({ ...signUpData });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);

    setTimeout(() => {
      setUserData({ ...signUpData });
    }, 2000);
  };

  const handleChange = ({ target: { name, value } }) =>
    setUserData((prevState) => ({ ...prevState, [name]: value }));

  return (
    <section className="h-screen flex">
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

          <InputField
            type="text"
            labelName="Username"
            required
            name="userName"
            onChange={handleChange}
            value={userData.userName}
          />

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
