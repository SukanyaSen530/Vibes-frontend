import { useEffect, useState } from "react";
import { Outlet, NavLink, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectAuth } from "../../redux/slices/authSlice";

import { IoIosSettings } from "react-icons/io";
import { FaLink, FaUserCog } from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";

import { profileNav } from "./profileNav";
import { Followers, Following } from "./FollowModal";

import {
  EditPasswordForm,
  EditProfileForm,
  FollowButton,
  FullLoader,
} from "../../components";

import "./profile.scss";

import { useGetUserProfileQuery } from "../../redux/services/userApi";
import { toast } from "react-toastify";

const Profile = () => {
  const { user } = useSelector(selectAuth);
  const { userId } = useParams();
  const navigate = useNavigate();

  const [openEditPassword, setOpenSetPassword] = useState(false);
  const handleEditPassword = () => setOpenSetPassword((val) => !val);

  const [openEditProfile, setOpenSetProfile] = useState(false);
  const handleEditProfile = () => setOpenSetProfile((val) => !val);

  const [openFollowersModal, setOpenFollowersModal] = useState(false);
  const handleOpenFollowers = () => {
    setOpenFollowersModal((val) => !val);
  };

  const [openFollowingModal, setOpenFollowingModal] = useState(false);
  const handleOpenFollowing = () => {
    setOpenFollowingModal((val) => !val);
  };

  const {
    data: profileData,
    isLoading: profileLoading,
    isError: isProfileError,
  } = useGetUserProfileQuery(userId);

  const { userProfile } = profileData || {};
  const {
    avatar,
    banner,
    bio,
    website,
    fullName,
    userName,
    email,
    followers,
    followings,
    createdAt,
  } = userProfile || {};

  useEffect(() => {
    if (isProfileError) {
      toast.error("User not found!");
      navigate("/home/feed");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProfileError]);

  let actionButtons = null;
  if (userId === user._id) {
    actionButtons = (
      <>
        <div className="flex gap-4">
          <button
            className="bg-blue-300 p-2 relative font-medium  text-2xl rounded-lg  hover:bg-blue-500 hover:text-white ease-in duration-150 flex items-center gap-3 mt-20"
            onClick={handleEditProfile}
          >
            <IoIosSettings className="text-4xl" />
            Edit Profile
          </button>

          <button
            className="bg-gray-300 p-2 relative font-medium  text-2xl rounded-lg  hover:bg-gray-500 hover:text-white ease-in duration-150 flex items-center gap-3 mt-20"
            onClick={handleEditPassword}
          >
            <FaUserCog className="text-4xl" /> Password
          </button>
        </div>
      </>
    );
  } else {
    actionButtons = <FollowButton size="md" user={userProfile || {}} />;
  }

  return (
    <>
      <section className="profile bg-slate-100 p-4">
        {profileLoading ? <FullLoader /> : null}

        <div className="profile__banner">
          <img
            src={banner?.secure_url}
            alt="profile_banner"
            className="img-responsive"
          />
        </div>

        <div className="profile__details">
          <div className="flex items-center justify-between">
            <img
              src={avatar?.secure_url}
              alt="profile_avatar"
              className="h-60 w-60 avatar"
            />

            {/* if user opened his own profile */}
            {actionButtons}
          </div>

          <article className="profile__details__content">
            <div className="mt-4">
              <div className="flex gap-4 items-center text-3xl">
                <span className="text-4xl">{fullName}</span>
                <span> ✨ </span>
                <span>@{userName}</span>
              </div>

              <p>{email}</p>

              <p className="flex items-center gap-4 text-xl">
                <BsCalendarCheck /> Joined -{" "}
                {new Date(createdAt).toDateString()}
              </p>

              <p className="font-medium">{bio}</p>

              {website ? (
                <a
                  href={website}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex gap-2 items-center text-2xl text-blue-500 hover:text-black duration-150"
                >
                  <FaLink /> {website}
                </a>
              ) : null}
            </div>

            <ul className="flex gap-4 text-3xl mt-4">
              <li>
                <span className="font-bold"> 0 </span> posts
              </li>
              <li
                onClick={() =>
                  followers?.length > 0 ? handleOpenFollowers() : null
                }
                className="cursor-pointer text-gray-600 hover:text-blue-700 font-medium"
              >
                <span className="font-bold"> {followers?.length || 0} </span>{" "}
                followers
              </li>
              <li
                onClick={() =>
                  followings?.length > 0 ? handleOpenFollowing() : null
                }
                className="cursor-pointer text-gray-600 hover:text-blue-700 font-medium"
              >
                <span className="font-bold"> {followings?.length || 0} </span>{" "}
                following
              </li>
            </ul>
          </article>
        </div>

        {/* Saved Posts Liked */}
        <div className="bg-white min-h-screen">
          <div className="flex w-6/12 mx-auto text-4xl justify-between py-6 text-gray-500 font-semibold">
            {profileNav.map((nav) => (
              <NavLink
                key={nav.id}
                to={`/home/profile/${userId}/${nav.link}`}
                className={({ isActive }) => (!isActive ? "" : "active-link")}
              >
                {nav.name}
              </NavLink>
            ))}
          </div>
          <Outlet />
        </div>
      </section>

      {/* Modals */}
      {openEditPassword ? (
        <EditPasswordForm
          open={openEditPassword}
          onClose={handleEditPassword}
        />
      ) : null}

      {openEditProfile ? (
        <EditProfileForm
          open={openEditProfile}
          onClose={handleEditProfile}
          user={{
            avatar: user.avatar,
            website: user.website,
            bio: user.bio,
            banner: user.banner,
            gender: user.gender,
            fullName: user.fullName,
          }}
        />
      ) : null}

      {openFollowersModal ? (
        <Followers
          open={openFollowersModal}
          onClose={handleOpenFollowers}
          followers={followers}
          userId={userId}
        />
      ) : null}

      {openFollowingModal ? (
        <Following
          open={openFollowingModal}
          onClose={handleOpenFollowing}
          followings={followings}
          userId={userId}
        />
      ) : null}
    </>
  );
};

export default Profile;
