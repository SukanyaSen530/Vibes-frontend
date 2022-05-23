import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Icons and Images
import { logo } from "../../assets/images";
import { BiLockAlt } from "react-icons/bi";

// Custom Components
import { InputField, FullLoader } from "../../components";

//Initial State of form
import { resetPasswordData } from "./helper";

import { useResetPasswordMutation } from "../../redux/services/authApi";

const ResetPassword = () => {
  const [resetPassword, { isLoading, error, isError, isSuccess }] =
    useResetPasswordMutation();

  const { token } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({ ...resetPasswordData });

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword({ token, password: userData.password });
  };

  const handleChange = ({ target: { name, value } }) =>
    setUserData((prevState) => ({ ...prevState, [name]: value }));

  useEffect(() => {
    if (isSuccess) {
      setUserData(resetPassword);
      toast.success("Password changed successfully! Please login...");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }

    if (isError) toast.error(error?.data?.message);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, error]);

  return (
    <section className="auth-section h-screen flex">
      {isLoading ? <FullLoader /> : null}

      <div className="h-full">
        <img
          src="https://res.cloudinary.com/weebofigurines/image/upload/v1653225337/vibes/resetpass_ko7mpp.jpg"
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
            Set new password
          </h2>

          <InputField
            type="password"
            labelName="New Password"
            autoFocus
            required
            name="password"
            onChange={handleChange}
            value={userData.password}
          />

          <InputField
            type="password"
            labelName="Confirm New Password"
            autoFocus
            required
            name="confirmPassword"
            onChange={handleChange}
            pattern={userData.password}
            title="Email should match!"
            value={userData.confirmPassword}
          />

          <button className="bg-blue-300 my-6 p-5 relative font-medium text-gray-600 text-3xl rounded-lg block w-full hover:bg-blue-500 hover:text-white ease-in duration-150">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <BiLockAlt className="h-10 w-10" aria-hidden="true" />
            </span>
            Reset Password
          </button>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
