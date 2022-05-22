import { Link } from "react-router-dom";

const UserDetail = ({ id, avatar, userName, fullName, createdAt }) => {
  return (
    <div className="flex items-center gap-4 mb-2">
      <Link to={`/home/profile/${id}`}>
        <figure className="avatar avatar-sm cursor-pointer">
          <img
            className="avatar-img"
            src={avatar?.secure_url}
            alt="useravatar"
          />
        </figure>
      </Link>
      <div className="flex-col">
        <p className="text-2xl text-left">{userName}</p>
        {createdAt ? (
          <p className="text-xl text-gray-500">
            {new Date(createdAt).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        ) : null}
        {fullName ? <p className="text-xl text-gray-500">{fullName}</p> : null}
      </div>
    </div>
  );
};

export default UserDetail;
