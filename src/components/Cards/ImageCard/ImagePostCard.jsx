import { Link } from "react-router-dom";

import { AiFillHeart } from "react-icons/ai";
import { MdOutlineModeComment } from "react-icons/md";

import "./image-post-card.scss";

const ImagePostCard = ({ _id = 0, images, likes, comments }) => {
  return (
    <Link className="image-card" to={`/home/post/${_id}`}>
      <img
        src={images[0].secure_url}
        alt="imagecard"
        className="img-responsive rounded-2xl"
      />
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
    </Link>
  );
};

export default ImagePostCard;
