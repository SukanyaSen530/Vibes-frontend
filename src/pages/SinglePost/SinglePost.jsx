import React from "react";
import { Link } from "react-router-dom";

import { Caraousel } from "../../components";

import { AiFillHeart, AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import { FaRegComments } from "react-icons/fa";

import { post } from "../../dummy";

import "./single-post.scss";

const Comment = () => {
  const {
    content,
    images,
    likes,
    comments,
    user: { _id, avatar, userName, fullName },
  } = post;

  return (
    <section className="single-post">
      <article className="content flex">
        <div className="flex-1 flex items-center">
          <Caraousel images={images} />
        </div>

        <div className="flex-1 flex flex-col border-l-2">
          <div className="flex items-center gap-4 border-b-2 px-4 pb-1 pt-3">
            <Link to={`/home/profile/${_id}`}>
              <figure className="avatar avatar-sm cursor-pointer">
                <img className="avatar-img" src={avatar} alt="useravatar" />
              </figure>
            </Link>
            <div className="text-left">
              <p className="text-3xl">{userName}</p>
              <p className="text-2xl text-gray-500">{fullName}</p>
            </div>
            <p className="ml-auto text-2xl text-gray-500">May 28, 2019</p>
          </div>

          <p className="text-justify text-xl p-4 border-b-2">{content}</p>

          {/* Comments */}
          <div className="flex-1 relative">
            <div className="absolute top-0 bottom-0 right-0 left-0 overflow-y-auto">
              {comments?.map((comment) => (
                <div className="flex mx-4 my-8 items-start text-xl gap-6 text-justify">
                  <figure className="avatar avatar-sm cursor-pointer flex-shrink-0">
                    <img className="avatar-img" src={avatar} alt="useravatar" />
                  </figure>
                  <div>
                    <span className="font-bold">{userName}</span>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                    </span>
                  </div>
                  <AiOutlineHeart className="ml-auto text-4xl flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          <div className="post-card__controls flex items-center justify-between p-2 mt-auto border-b-2 border-t-2">
            <div className="flex gap-8">
              <AiOutlineHeart className="icons" />
              <RiShareForwardLine className="icons" />
            </div>
            <MdBookmarkBorder className="icons" />
          </div>

          <div className="flex mx-4 gap-4 items-center p-2">
            <input
              type="text"
              placeholder="Add a comment..."
              className="outline-0 text-2xl w-full"
            />
            <button className="bg-blue-300 rounded-lg py-2 px-6 text-3xl hover:bg-blue-500 hover:text-white ease-in duration-150">
              Post
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Comment;
