import React, { useEffect } from "react";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/slices/authSlice";

import { BiLoaderCircle } from "react-icons/bi";

import {
  useFollowUserMutation,
  useUnFollowUserMutation,
} from "../../redux/services/userApi";

const FollowButton = ({ user, isLoading, size = "sm" }) => {
  const { user: loggedInUser } = useSelector(selectAuth);
  const { followers } = user || {};

  const followed = followers?.find((item) => item === loggedInUser._id);

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

  let classes = "";
  if (size === "sm") {
    classes = "py-2 px-4 text-2xl";
  } else if (size === "md") {
    classes = "py-4 px-6 text-4xl";
  }

  return (
    <>
      {followed ? (
        <button
          className={`bg-red-400 text-white hover:bg-red-600 ml-auto rounded-3xl duration-300 flex gap-4 items-center justify-center ${classes}`}
          onClick={handleUnFollow}
        >
          {unFollowUserLoading === false ? null : (
            <BiLoaderCircle
              className={`text-4xl ${isLoading ? "animate-spin" : null}`}
            />
          )}

          {isLoading === true ? null : "Unfollow"}
        </button>
      ) : (
        <button
          className={`bg-blue-400 text-white hover:bg-blue-600 rounded-3xl ml-auto duration-300 flex gap-4 items-center justify-center ${classes}`}
          onClick={handleFollow}
        >
          {followUserLoading === false ? null : (
            <BiLoaderCircle
              className={`text-4xl ${isLoading ? "animate-spin" : null}`}
            />
          )}
          {isLoading === true ? null : "Follow"}
        </button>
      )}
    </>
  );
};

export default FollowButton;
