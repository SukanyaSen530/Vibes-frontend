import { Caraousel } from "../..";

import { FaRegComments } from "react-icons/fa";

import "./post-card.scss";
import PostCardHeader from "./PostCardHeader";
import PostCardBody from "./PostCardBody";
import BookMarkButton from "../../Buttons/BookMarkButton";
import LikeButton from "../../Buttons/LikeButton";
import ShareButton from "../../Buttons/ShareButton";

const PostCard = ({ description, images, likes, createdAt, user }) => {
  return (
    <article className="post-card p-4">
      <PostCardHeader {...user} createdAt={createdAt} />

      <Caraousel images={images} />

      <PostCardBody description={description} />

      <div className="post-card__controls flex justify-between">
        <div className="flex gap-8">
          <LikeButton />
          <FaRegComments className="icons" />
          <ShareButton />
        </div>

        <BookMarkButton />
      </div>
    </article>
  );
};

export default PostCard;
