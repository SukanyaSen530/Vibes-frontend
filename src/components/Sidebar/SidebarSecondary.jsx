import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectAuth } from "../../redux/slices/authSlice";

import "./sidebar-secondary.scss";

import { follow } from "../../dummy";

const SidebarSecondary = () => {
  const {
    user: { _id, avatar, userName, fullName, email },
  } = useSelector(selectAuth);

  return (
    <div className="sidebar-secondary bg-slate-100 flex-col items-center justify-center rounded-2xl p-5 ml-auto">
      <article className="profile-card">
        <Link to={`/home/profile/${_id}`}>
          <figure className="avatar avatar-md cursor-pointer">
            <img className="avatar-img" src={avatar} alt="useravatar" />
          </figure>
        </Link>

        <div>
          <span className="text-2xl text-left leading-loose">{fullName}</span>
          <span className="text-3xl">🔥</span>
          <span className="text-2xl text-left leading-loose">{userName}</span>
          <p className="text-xl text-left leading-loose">{email}</p>
        </div>
      </article>

      <p className="suggestion flex justify-between">
        <span>Suggestions for you </span>
        <Link to="/home/people" className="suggestion__see-all">
          See All
        </Link>
      </p>

      {Array(5)
        .fill(0)
        .map((e, index) => (
          <article className="profile-card" key={index}>
            <figure className="avatar avatar-sm cursor-pointer">
              <img
                className="avatar-img"
                src={follow.avatar}
                alt="useravatar"
              />
            </figure>
            <div>
              <p className="text-2xl text-left leading-loose">
                {follow.userName}
              </p>
              <p className="text-xl text-left leading-loose">
                {follow.fullName}
              </p>
            </div>
            <button className="bg-blue-400 py-2 px-4 rounded-3xl text-2xl text-white ml-auto duration-300 hover:bg-blue-600">
              Follow
            </button>
          </article>
        ))}
    </div>
  );
};

export default SidebarSecondary;
