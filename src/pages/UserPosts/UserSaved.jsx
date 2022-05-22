import React from "react";

import { EmptyState, ImagePostCard } from "../../components";

import "./common-user.scss";

function UserSaved() {
  const images = [];
  return (
    <div className="image-container">
      {images.length === 0 ? <EmptyState type="saved" /> : null}
    </div>
  );
}

export default UserSaved;
