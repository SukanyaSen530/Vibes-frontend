import React from "react";

import { MdBookmarkBorder, MdBookmark } from "react-icons/md";

function BookMarkButton({
  isbookMarked = true,
  isLoading = false,
  handleBookMark = () => {},
}) {
  const handleDisable = (e) => {
    if (isLoading) e.preventDefault();
    else handleBookMark();
  };

  return (
    <>
      {isbookMarked ? (
        <MdBookmark
          className={`icons ${isLoading ? "text-gray-400" : "text-blue-500"}`}
        />
      ) : (
        <MdBookmarkBorder
          className={`icons ${isLoading ? "text-gray-400" : ""}`}
        />
      )}
    </>
  );
}

export default BookMarkButton;
