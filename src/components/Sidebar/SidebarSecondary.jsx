import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectAuth } from "../../redux/slices/authSlice";

import { UserCard } from "../";

import { useGetSuggestionsQuery } from "../../redux/services/userApi";

const SidebarSecondary = () => {
  const {
    user: { _id, avatar, userName, fullName, email },
  } = useSelector(selectAuth);

  const {
    data,
    // isLoading,
    // isError,
    // isSuccess,
    // error,
  } = useGetSuggestionsQuery();

  return (
    <div className="w-full bg-slate-100 flex-col items-center justify-center rounded-2xl p-5 ml-auto">
      <article className="border-2 rounded-2xl p-4 mb-4">
        <Link to={`/home/profile/${_id}`}>
          <figure className="avatar avatar-lg cursor-pointer">
            <img
              className="avatar-img"
              src={avatar.secure_url}
              alt="useravatar"
            />
          </figure>
        </Link>
        <div>
          <span className="text-2xl leading-loose">{fullName}</span>
          <span className="text-3xl">🔥</span>
          <span className="text-2xl leading-loose lowercase">{userName}</span>
          <p className="text-xl leading-loose lowercase">{email}</p>
        </div>
      </article>

      <p className="flex justify-between">
        <span> Suggestions for you </span>

        <Link to="/home/people" className="font-semibold">
          See All
        </Link>
      </p>

      {data?.users?.map((user) => (
        <UserCard user={user} key={user._id} />
      ))}
    </div>
  );
};

export default SidebarSecondary;
