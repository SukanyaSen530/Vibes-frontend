import React from "react";
import { Outlet, NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectAuth } from "../../redux/slices/authSlice";

import { IoIosSettings } from "react-icons/io";
import { FaLink, FaUserCog } from "react-icons/fa";

import { profileNav } from "./profileNav";

import "./profile.scss";

const Profile = () => {
  const { user } = useSelector(selectAuth);
  const { userId } = useParams();

  return (
    <section className="profile bg-slate-100 p-4">
      <div className="profile__banner">
        <img
          src={user.banner}
          alt="profile_banner"
          className="img-responsive"
        />
      </div>

      <div className="profile__details">
        <div className="flex items-center justify-between">
          <img
            src={user.avatar}
            alt="profile_avatar"
            className="h-60 w-60 avatar"
          />

          {/* if user */}
          {userId === user._id ? (
            <div className="flex gap-4">
              <button className="bg-blue-300 p-2 relative font-medium  text-2xl rounded-lg  hover:bg-blue-500 hover:text-white ease-in duration-150 flex items-center gap-3 mt-20">
                <IoIosSettings className="text-4xl" />
                Edit Profile
              </button>
              <button className="bg-gray-300 p-2 relative font-medium  text-2xl rounded-lg  hover:bg-gray-500 hover:text-white ease-in duration-150 flex items-center gap-3 mt-20">
                <FaUserCog className="text-4xl" /> Password
              </button>
            </div>
          ) : null}
        </div>

        <article className="profile__details__content">
          <div className="mt-4">
            <div className="flex gap-4 items-center text-3xl">
              <span className="text-4xl">{user.fullName}</span>
              <span> ✨ </span>
              <span>@{user.userName}</span>
            </div>
            <p>{user.email}</p>

            {user.bio ? <p className="font-medium">{user.bio}</p> : null}
            {user?.website ? (
              <a
                href={user.website}
                rel="noopener noreferrer"
                target="_blank"
                className="flex gap-2 items-center text-2xl text-blue-500 hover:text-black duration-150"
              >
                <FaLink /> {user.website}
              </a>
            ) : null}
          </div>

          <ul className="flex gap-4 text-3xl mt-4">
            <li>
              <span className="font-bold"> 47 </span> posts
            </li>
            <li>
              <span className="font-bold"> 300 </span> followers
            </li>
            <li>
              <span className="font-bold"> 47 </span> following
            </li>
          </ul>
        </article>
      </div>

      <div className="bg-white min-h-screen">
        <div className="flex w-6/12 mx-auto text-4xl justify-between py-6 text-gray-500 font-semibold">
          {profileNav.map((nav) => (
            <NavLink
              key={nav.id}
              to={`/home/profile/${userId}/${nav.link}`}
              className={({ isActive }) => (!isActive ? "" : "active-link")}
            >
              {" "}
              {nav.name}{" "}
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default Profile;
