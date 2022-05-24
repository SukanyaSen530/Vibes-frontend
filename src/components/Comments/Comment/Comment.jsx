import { Link } from "react-router-dom";

import CommentBody from "./CommentBody";
import CommentFooter from "./CommentFooter";

const Comment = ({ comment }) => {
  const { user, content, createdAt, likes } = comment || {};

  return (
    <>
      <div className="flex mt-8 items-start gap-4 text-justify">
        <Link to={`/home/profile/${user?._id}`} replace className="shrink-0">
          <img
            className="h-16 w-16"
            src={user?.avatar?.secure_url}
            alt="useravatar"
          />
        </Link>

        <div className="flex-1">
          <span className="font-medium text-xl mr-4">{user?.userName}</span>
          <CommentBody content={content} />
        </div>
        <CommentFooter comment={comment} />
      </div>
    </>
  );
};

export default Comment;
