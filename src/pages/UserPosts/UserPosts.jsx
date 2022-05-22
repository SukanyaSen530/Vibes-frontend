import React from "react";
import { ImagePostCard, EmptyState } from "../../components";

import "./common-user.scss";

function UserPosts() {
  const images = [];
  return (
    <div className="image-container">
      {images.length === 0 ? <EmptyState type="posts" /> : null}
    </div>
  );
}

export default UserPosts;
