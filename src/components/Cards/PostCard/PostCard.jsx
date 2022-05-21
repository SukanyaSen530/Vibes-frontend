import { Link } from "react-router-dom";
import { Caraousel } from "../..";

import { FaRegComments } from "react-icons/fa";

import "./post-card.scss";
import PostCardHeader from "./PostCardHeader";
import PostCardBody from "./PostCardBody";
import BookMarkButton from "../../Buttons/BookMarkButton";
import LikeButton from "../../Buttons/LikeButton";
import ShareButton from "../../Buttons/ShareButton";

const PostCard = ({
  _id,
  description,
  images,
  createdAt,
  user,
  likes,
  comments,
}) => {
  return (
    <article className="post-card p-4">
      <PostCardHeader
        {...user}
        createdAt={createdAt}
        postId={_id}
        description={description}
      />

      <Caraousel images={images} />

      <PostCardBody description={description} />

      <div className="post-card__controls flex justify-between">
        <div className="flex gap-8">
          <LikeButton />

          <Link to={`/home/post/${_id}`}>
            <FaRegComments className="icons" />
          </Link>

          <ShareButton id={_id} />
        </div>

        <BookMarkButton />
      </div>
      <p className="text-gray-500 text-xl pt-2">
        {likes?.length} likes, {comments?.length} comments!
      </p>
    </article>
  );
};

export default PostCard;
