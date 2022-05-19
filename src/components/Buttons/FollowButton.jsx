import React, { useEffect } from "react";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/slices/authSlice";

import { BiLoaderCircle } from "react-icons/bi";

import {
  useFollowUserMutation,
  useUnFollowUserMutation,
} from "../../redux/services/userApi";

const FollowButton = ({ user, isLoading }) => {
  const {
    user: { followings },
  } = useSelector(selectAuth);

  const followed = followings.find((item) => item._id === user._id);

  const [
    followUser,
    {
      isLoading: followUserLoading,
      isSuccess: followUserIsSuccess,
      isError: followUserIsError,
      error: followUserError,
    },
  ] = useFollowUserMutation();

  const [
    unFollowUser,
    {
      isLoading: unFollowUserLoading,
      isSuccess: unFollowUserIsSuccess,
      isError: unFollowUserIsError,
      error: unFollowUserError,
    },
  ] = useUnFollowUserMutation();

  const handleFollow = () => {
    followUser(user._id);
  };

  const handleUnFollow = () => {
    unFollowUser(user._id);
  };

  useEffect(() => {
    if (followUserIsSuccess) {
      toast.success("User Followed...");
    }

    if (followUserIsError) {
      toast.error(
        followUserError?.data?.message || "Can not follow user at the moment!"
      );

      console.log(followUserError);
    }
  }, [followUserIsSuccess, followUserIsError, followUserError]);

  useEffect(() => {
    if (unFollowUserIsSuccess) {
      toast.success("User Unfollowed...");
    }

    if (unFollowUserIsError) {
      toast.error(
        unFollowUserError?.data?.message || "Can not follow user at the moment!"
      );
    }
  }, [unFollowUserIsError, unFollowUserIsSuccess, unFollowUserError]);

  return (
    <>
      {followed ? (
        <button
          class="bg-blue-400 py-2 px-4 rounded-3xl text-2xl text-white ml-auto duration-300 hover:bg-blue-600"
          onClick={handleUnFollow}
        >
          {unFollowUserLoading === false ? null : (
            <BiLoaderCircle
              className={`text-3xl ${isLoading ? "animate-spin" : null}`}
            />
          )}

          {isLoading === true ? null : "Unfollow"}
        </button>
      ) : (
        <button
          className="bg-gray-400 py-2 px-4 rounded-3xl text-2xl text-white ml-auto duration-300 hover:bg-gray-600"
          onClick={handleFollow}
        >
          {followUserLoading === false ? null : (
            <BiLoaderCircle
              className={`text-3xl ${isLoading ? "animate-spin" : null}`}
            />
          )}
          {isLoading === true ? null : "Follow"}
        </button>
      )}
    </>
  );
};

export default FollowButton;
