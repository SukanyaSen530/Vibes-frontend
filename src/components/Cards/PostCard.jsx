import React from "react";
import { Link } from "react-router-dom";
import { Caraousel } from "../";

import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { MdOutlineModeComment } from "react-icons/md";
import { BsBookmarks, BsBookmarksFill } from "react-icons/bs";

import "./post-card.scss";

const PostCard = ({
  content,
  images,
  likes,
  user: { _id, avatar, userName },
}) => {
  return (
    <article className="post-card p-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Link to={`/home/profile/${_id}`}>
            <figure className="avatar avatar-sm cursor-pointer">
              <img className="avatar-img" src={avatar} alt="useravatar" />
            </figure>
          </Link>
          <p className="text-xl text-left leading-loose">{userName}</p>
        </div>
      </div>

      <p className="text-2xl my-2">{content}</p>

      <Caraousel images={images} />
      <div className="post-card__controls flex justify-between pt-4">
        <div className="flex gap-8">
          <AiOutlineHeart className="icons" />
          <MdOutlineModeComment className="icons" />
          <AiOutlineShareAlt className="icons" />
        </div>
        <BsBookmarks className="icons" />
      </div>
    </article>
  );
};

export default PostCard;
