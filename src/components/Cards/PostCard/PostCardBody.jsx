import { useState } from "react";

function PostCardBody({ description }) {
  const [readMore, setReadMore] = useState(false);

  let content = null;

  if (description?.length <= 100) {
    content = description;
  } else {
    content = (
      <>
        <span>
          {readMore ? description + " " : `${description?.substr(0, 100)} ... `}
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
    <p className="text-2xl my-2 font-medium text-gray-600 py-2 text-left">
      {content}
    </p>
  );
}

export default PostCardBody;
