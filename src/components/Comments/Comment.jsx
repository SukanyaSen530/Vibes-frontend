import React from "react";

import { AiOutlineHeart } from "react-icons/ai";

const Comment = ({ user, content }) => {
  return (
    <div className="flex my-8 items-start text-xl gap-6 text-justify">
      <figure className="avatar avatar-sm cursor-pointer flex-shrink-0">
        <img
          className="avatar-img"
          src={user?.avatar?.secure_url}
          alt="useravatar"
        />
      </figure>
      <div>
        <span className="font-bold">{user?.userName}</span>
        <span>{content}</span>
      </div>
      <AiOutlineHeart className="ml-auto text-4xl flex-shrink-0" />
    </div>
  );
};

export default Comment;
