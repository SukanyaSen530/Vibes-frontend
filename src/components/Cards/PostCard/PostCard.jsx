import "./post-card.scss";
import PostCardHeader from "./PostCardHeader";
import PostCardBody from "./PostCardBody";
import PostFooter from "./PostFooter";

import { Caraousel } from "../..";

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
      <PostFooter postId={_id} likes={likes} comments={comments} user={user} />
    </article>
  );
};

export default PostCard;
