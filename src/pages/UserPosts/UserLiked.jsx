import { useEffect } from "react";
import { ImagePostCard, EmptyState } from "../../components";

import "./common-user.scss";

function UserLiked() {
  const images = [];
  return (
    <div className="image-container">
      {images.length === 0 ? <EmptyState type="likes" /> : null}
    </div>
  );
}

export default UserLiked;
