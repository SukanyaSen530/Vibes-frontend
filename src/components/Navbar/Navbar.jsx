import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectAuth } from "../../redux/slices/authSlice";

import { smallLogo } from "../../assets/images";

import { RiUserSearchFill, RiImageAddFill } from "react-icons/ri";
import { GrNotification } from "react-icons/gr";

import { PostForm } from "../";

import "./navbar.scss";

function Navbar() {
  const {
    user: { _id, avatar },
  } = useSelector(selectAuth);

  const [openPostModal, setOpenPostModal] = useState(false);

  const handlePostModal = () => setOpenPostModal((val) => !val);

  return (
    <nav className="navbar flex items-center px-8 bg-slate-100 p-4 sticky top-0 gap-4">
      <img className="w-24 h-24" src={smallLogo} alt="VibesLogo" />

      <div className="navbar__search flex-1 relative text-left">
        <input
          id="search"
          type="search"
          placeholder="Search Users..."
          autoFocus
          required
          className="navbar__search__input ml-10 h-16 border-0 text-gray-700 text-2xl outline-0 px-7 rounded-tl-2xl rounded-bl-2xl"
        />

        <button
          type="submit"
          className="navbar__search__btn h-16 bg-green-600 text-white text-3xl absolute px-4 rounded-tr-2xl rounded-br-2xl opacity-0 duration-200"
        >
          <RiUserSearchFill />
        </button>
      </div>

      <ul className="ml-auto flex items-center gap-10">
        <RiImageAddFill
          className="icons cursor-pointer"
          onClick={() => handlePostModal()}
        />

        <article className="badge">
          <GrNotification className="icons" />
          <span className="badge-count primary">0</span>
        </article>

        <Link to={`/home/profile/${_id}`}>
          <figure className="avatar avatar-md">
            <img className="avatar-img" src={avatar} alt="useravatar" />
          </figure>
        </Link>
        <button className="bg-blue-300 my-6 py-3 px-5 font-medium text-gray-900 text-3xl rounded-lg  hover:bg-blue-500 hover:text-white ease-in duration-150">
          Logout
        </button>
      </ul>

      {openPostModal ? (
        <PostForm open={openPostModal} onClose={handlePostModal} />
      ) : null}
    </nav>
  );
}

export default Navbar;
