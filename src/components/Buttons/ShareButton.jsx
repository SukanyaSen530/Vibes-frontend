import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { RiShareForwardLine } from "react-icons/ri";

function ShareButton({ postId }) {
  const location = useLocation();

  const getPostPath = (pathname) => {
    if (pathname.includes("post"))
      return navigator.clipboard.writeText(window.location.href);
    else {
      return navigator.clipboard.writeText(
        window.location.href + `/post/${postId}`
      );
    }
  };

  return (
    <>
      <RiShareForwardLine
        className="icons"
        onClick={() => {
          getPostPath(location.pathname);
          toast.success("Link copied to clipbaord successfully!");
        }}
      />
    </>
  );
}

export default ShareButton;
