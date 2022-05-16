import React from "react";

import { SidebarSecondary, PostCard } from "../../components";
import { post } from "../../dummy";

import "./feed.scss";

const Feed = () => {
  return (
    <section className="feed flex">
      <div className="flex-1 px-12 text-justify bg-slate-100 my-8 mx-12 rounded-2xl">
        {Array(5)
          .fill(0)
          .map((e, index) => (
            <PostCard key={index} {...post} />
          ))}
      </div>

      <div className="feed__sidebar sticky">
        <SidebarSecondary />
      </div>
    </section>
  );
};

export default Feed;
