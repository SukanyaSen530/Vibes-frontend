import React from "react";

import { ImagePostCard } from "../../components";

import { post } from "../../dummy";

import "./common-user.scss";

function UserSaved() {
  return (
    <div className="image-container">
      {Array(1)
        .fill(0)
        .map((e, index) => (
          <ImagePostCard key={index} {...post} />
        ))}
    </div>
  );
}

export default UserSaved;
