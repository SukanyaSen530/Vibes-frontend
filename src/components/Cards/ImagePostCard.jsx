import React from "react";

import { AiFillHeart } from "react-icons/ai";
import { MdOutlineModeComment } from "react-icons/md";

import "./image-post-card.scss";

const ImagePostCard = ({ images, likes, comments }) => {
  return (
    <article className="image-card">
      <img src={images[0]} alt="imagecard" className="img-responsive" />
      <div className="image-card__stats flex gap-4">
        <p className="flex gap-2">
          <AiFillHeart className="icons" />
          <span>{likes?.length || 0}</span>
        </p>
        <p className="flex gap-2">
          <MdOutlineModeComment className="icons" />
          <span>{comments?.length || 0}</span>
        </p>
      </div>
    </article>
  );
};

export default ImagePostCard;
