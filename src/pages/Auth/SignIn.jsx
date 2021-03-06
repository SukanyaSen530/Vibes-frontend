import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// Icons and Images
import { logo } from "../../assets/images";

// Custom Components
import { InputField, FullLoader } from "../../components";

//Initial State of form
import { signInData } from "./helper";

// Styles
import "./auth.scss";

import { useSigninUserMutation } from "../../redux/services/authApi";

const SignIn = () => {
  const [signinUser, { data, isLoading, error, isError, isSuccess }] =
    useSigninUserMutation();

  const [userData, setUserData] = useState({ ...signInData });

  const handleSubmit = (e) => {
    e.preventDefault();
    signinUser(userData);
  };

  useEffect(() => {
    if (isSuccess) {
      setUserData(signInData);
      toast.success("Logged in successfully!");
    }

    if (isError) toast.error(error?.data?.message);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, data, error]);

  const handleChange = ({ target: { name, value } }) =>
    setUserData((prevState) => ({ ...prevState, [name]: value }));

  return (
    <section className="auth-section h-screen flex flex-col md:flex-row">
      {isLoading ? <FullLoader /> : null}

      <div className="h-1/2 md:h-full md:w-1/2 lg:w-fit">
        <img
          src="https://res.cloudinary.com/weebofigurines/image/upload/v1653225336/vibes/signin_nye7mg.jpg"
          alt="loginImage"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex-1 flex justify-center items-center">
        <form
          className="auth-section__form m-6 p-8 rounded-2xl w-full gap-4 lg:w-6/12 md:gap-0"
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

          <div className="flex justify-between gap-6 flex-col md:flex-row md:gap-0">
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
      {/* <FullLoader /> */}
    </section>
  );
};

export default SignIn;
