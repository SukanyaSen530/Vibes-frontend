import React from "react";

import { SidebarSecondary, PostCard } from "../../components";

import { useGetAllPostsQuery } from "../../redux/services/postApi";

import "./feed.scss";

const Feed = () => {
  const { data, isLoading, error } = useGetAllPostsQuery();

  console.log(data);

  return (
    <section className="feed flex">
      <div className="flex-1 px-12 text-justify bg-slate-100 my-8 mx-12 rounded-2xl">
        {data?.posts?.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>

      <div className="feed__sidebar sticky">
        <SidebarSecondary />
      </div>
    </section>
  );
};

export default Feed;
