import { Link } from "react-router-dom";
import moment from "moment";

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
      <div>
        <p className="text-2xl text-left">{userName}</p>
        {createdAt ? (
          <p className="text-xl text-gray-500">
            {`${moment(new Date(createdAt), "YYYYMMDD").fromNow()}, ${moment(
              new Date(createdAt)
            ).format("LL")}`}
          </p>
        ) : null}
        {fullName ? <p className="text-xl text-gray-500">{fullName}</p> : null}
      </div>
    </div>
  );
};

export default UserDetail;
