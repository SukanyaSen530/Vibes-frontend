//Icons
import { BiLoaderCircle } from "react-icons/bi";

const FormButton = ({ isLoading = false, text, handleClick = () => {} }) => {
  return (
    <button
      className="bg-blue-300 p-4 relative font-medium text-2xl rounded-lg  hover:bg-blue-500 hover:text-white ease-in duration-150 w-full text-center flex items-center gap-4 justify-center"
      onClick={handleClick}
    >
      {isLoading === false ? null : (
        <BiLoaderCircle
          className={`text-3xl ${isLoading ? "animate-spin" : null}`}
        />
      )}
      {isLoading ? "Processing" : text}
    </button>
  );
};

export default FormButton;
