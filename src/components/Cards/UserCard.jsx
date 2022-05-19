import { Link } from "react-router-dom";

import { FollowButton } from "../";

import "./user-card.scss";

const UserCard = ({ user, showFollow = true }) => {
  const { avatar, fullName, userName } = user;

  return (
    <article className="user-card">
      <Link to={`/home/profile/${user._id}`}>
        <figure className="avatar avatar-sm cursor-pointer">
          <img
            className="avatar-img"
            src={avatar.secure_url}
            alt="useravatar"
          />
        </figure>
      </Link>
      <div>
        <p className="text-2xl text-left leading-loose">{userName}</p>
        <p className="text-xl text-left leading-loose">{fullName}</p>
      </div>
      {showFollow === true ? <FollowButton user={user} /> : null}
    </article>
  );
};

export default UserCard;
