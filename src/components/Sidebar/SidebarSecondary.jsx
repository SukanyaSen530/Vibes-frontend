import { Link } from "react-router-dom";

import "./sidebar-secondary.scss";

import { follow } from "../../dummy";

const SidebarSecondary = () => {
  return (
    <div className="sidebar-secondary bg-slate-100 flex-col items-center justify-center rounded-2xl p-5 ml-auto w-3/12">
      <div className="profile-card">
        <figure className="avatar avatar-md cursor-pointer">
          <img className="avatar-img" src={follow.avatar} alt="useravatar" />
        </figure>
        <div>
          <p>Sukanya530</p>
          <p>suku123</p>
        </div>
      </div>

      <p className="suggestion flex justify-between">
        <span>Suggestions for you </span>
        <Link to="/home/people" className="suggestion__see-all">
          See All
        </Link>
      </p>

      {Array(5)
        .fill(0)
        .map((e, index) => (
          <div className="profile-card" key={index}>
            <figure className="avatar avatar-sm cursor-pointer">
              <img
                className="avatar-img"
                src={follow.avatar}
                alt="useravatar"
              />
            </figure>
            <div>
              <p>{follow.userName}</p>
              <p>{follow.fullName}</p>
            </div>
            <button>Follow</button>
          </div>
        ))}
    </div>
  );
};

export default SidebarSecondary;
