import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FollowButton } from "../";

import { selectAuth } from "../../redux/slices/authSlice";

import "./user-card.scss";

const UserCard = ({ user, showFollow = true }) => {
  const { avatar, fullName, userName } = user;
  const { user: loggedInUser } = useSelector(selectAuth);

  console.log("loggedin", loggedInUser._id !== user._id);

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
      {showFollow === true && loggedInUser._id !== user._id ? (
        <FollowButton user={user} />
      ) : null}
    </article>
  );
};

export default UserCard;
