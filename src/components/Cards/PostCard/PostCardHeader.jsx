import { useState } from "react";
import { Link } from "react-router-dom";

import useClickOutside from "../../../hooks/useClickOutside";

import { BiDotsVerticalRounded } from "react-icons/bi";

const PostCardHeader = ({ _id, avatar, createdAt, userName }) => {
  const [open, setOpen] = useState(false);
  const domNode = useClickOutside(() => setOpen(false));

  return (
    <div className="flex justify-between mb-4 items-center">
      <div className="flex items-center gap-4">
        <Link to={`/home/profile/${_id}`}>
          <figure className="avatar avatar-sm cursor-pointer">
            <img
              className="avatar-img"
              src={avatar.secure_url}
              alt="useravatar"
            />
          </figure>
        </Link>
        <div className="flex-col">
          <p className="text-2xl text-left">{userName}</p>
          <p className="text-xl text-gray-500">
            {new Date(createdAt).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="menu" ref={domNode}>
        <BiDotsVerticalRounded
          className="icons text-gray-700"
          onClick={() => setOpen((val) => !val)}
        />
        <ul className={`menu__items bg-slate-100 ${open ? "active" : ""}`}>
          <li>Edit</li>
          <li>Delete</li>
        </ul>
      </div>
    </div>
  );
};

export default PostCardHeader;
