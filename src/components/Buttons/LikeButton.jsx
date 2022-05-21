import React from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const LikeButton = ({
  isLiked = false,
  isLoading = false,
  handleLike = () => {},
}) => {
  const handleDisable = (e) => {
    if (isLoading) e.preventDefault();
    else handleLike();
  };

  return (
    <>
      {isLiked ? (
        <AiFillHeart
          className={`icons ${isLoading ? "text-gray-400" : "text-blue-500"}`}
          onClick={handleDisable}
        />
      ) : (
        <AiOutlineHeart
          className={`icons ${isLoading ? "text-gray-400" : ""}`}
          onClick={handleDisable}
        />
      )}
    </>
  );
};

export default LikeButton;
