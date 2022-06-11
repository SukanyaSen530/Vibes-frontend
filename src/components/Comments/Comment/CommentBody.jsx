import { useState } from "react";

export const CommentBody = ({ content }) => {
  const [readMore, setReadMore] = useState(false);

  let commentContent = null;

  if (content?.length <= 100) {
    commentContent = content;
  } else {
    commentContent = (
      <>
        <span className="comment__description">
          {readMore ? content + " " : `${content?.substr(0, 100)} ... `}
        </span>
        <button
          onClick={() => setReadMore((val) => !val)}
          className="font-medium text-blue-500"
        >
          {readMore ? " Read Less" : "Read More"}
        </button>
      </>
    );
  }
  return (
    <span className="text-2xl text-gray-700  text-left">{commentContent}</span>
  );
};

export default CommentBody;
