import React from "react";

import { PostForm, SidebarSecondary } from "../../components";

import "./feed.scss";

const Feed = () => {
  return (
    <section className="feed flex">
      <div className="flex-1 p-4">
        {Array(5)
          .fill(0)
          .map((e, index) => (
            <div>hi</div>
          ))}
      </div>

      <SidebarSecondary />
    </section>
  );
};

export default Feed;
