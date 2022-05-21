//Icons
import { BiLoaderCircle } from "react-icons/bi";

const FormButton = ({
  isLoading = false,
  text,
  handleClick = () => {},
  classes,
}) => {
  let applied_clases = classes;
  if (!classes) {
    applied_clases = "w-full p-4";
  }

  return (
    <button
      className={`bg-blue-300 hover:bg-blue-500  relative font-medium text-2xl rounded-lg  hover:text-white ease-in duration-150 text-center flex items-center justify-center ${applied_clases}`}
      onClick={handleClick}
    >
      {isLoading === false ? null : (
        <BiLoaderCircle
          className={`text-3xl ${isLoading ? "animate-spin" : null}`}
        />
      )}
      {isLoading ? "" : text}
    </button>
  );
};

export default FormButton;
