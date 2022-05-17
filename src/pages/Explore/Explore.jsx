import React from "react";

import { ImagePostCard } from "../../components";

import { post } from "../../dummy";

import "./explore.scss";

const Explore = () => {
  return (
    <section className="explore">
      <div className="image-container">
        {Array(10)
          .fill(0)
          .map((e, index) => (
            <ImagePostCard key={index} {...post} />
          ))}
      </div>
    </section>
  );
};

export default Explore;
