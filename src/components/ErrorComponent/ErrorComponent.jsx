import { useNavigate } from "react-router-dom";
import { errorImage, notFound } from "../../assets/images";

const ErrorComponent = ({ type, text = "" }) => {
  let content = null;
  const navigate = useNavigate();

  if (type === "error") {
    content = (
      <div className="emptystate">
        <img src={errorImage} alt="error" className="emptystate__image" />
        <p className="text-red-600 text-3xl font-semibold">{text}</p>
      </div>
    );
  } else {
    content = (
      <section className="flex items-center justify-center h-screen w-screen">
        <div className="text-center">
          <img src={notFound} alt="not_found" className="h-80 mx-auto my-4" />

          <h3 className="p-4 text-6xl my-4 font-semibold text-blue-400">
            How did you land here?
          </h3>
          <p className="text-3xl">You are not supposed to be here!</p>

          <button
            className="bg-blue-300 hover:bg-blue-500  relative font-medium text-2xl rounded-lg  hover:text-white ease-in duration-150 text-center p-4 m-6"
            onClick={() => navigate(-1)}
          >
            Go Back!
          </button>
        </div>
      </section>
    );
  }

  return <>{content}</>;
};

export default ErrorComponent;
