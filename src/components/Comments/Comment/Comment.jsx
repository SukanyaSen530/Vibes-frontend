import { Link } from "react-router-dom";
import moment from "moment";

import CommentBody from "./CommentBody";
import CommentFooter from "./CommentFooter";

import "./comment.scss";

const Comment = ({ comment }) => {
  const { user, content, createdAt } = comment || {};

  return (
    <>
      <div className="comment flex mt-8 items-start gap-4 text-justify">
        <Link to={`/home/profile/${user?._id}`} replace className="shrink-0">
          <img
            className="h-16 w-16 rounded-full"
            src={user?.avatar?.secure_url}
            alt="useravatar"
          />
        </Link>

        <div className="flex-1">
          <span className="font-medium text-xl mr-4">{user?.userName}</span>
          <CommentBody content={content} />

          <p className="text-lg text-gray-500">
            {`${moment(new Date(createdAt), "YYYYMMDD").fromNow()}, ${moment(
              new Date(createdAt)
            ).format("LL")}`}
          </p>
        </div>
        <CommentFooter comment={comment} />
      </div>
    </>
  );
};

export default Comment;
