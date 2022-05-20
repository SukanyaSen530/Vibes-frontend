import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectAuth } from "../../redux/slices/authSlice";

import { smallLogo } from "../../assets/images";

import { RiImageAddFill } from "react-icons/ri";
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
            <img
              className="avatar-img"
              src={avatar.secure_url}
              alt="useravatar"
            />
          </figure>
        </Link>
      </ul>

      {openPostModal ? (
        <PostForm open={openPostModal} onClose={handlePostModal} />
      ) : null}
    </nav>
  );
}

export default Navbar;
