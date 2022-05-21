import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { BiDotsVerticalRounded } from "react-icons/bi";

import useClickOutside from "../../../hooks/useClickOutside";
import FormButton from "../../Buttons/FormButton";
import {
  togglePostModal,
  updateEditPostData,
} from "../../../redux/slices/postSlice";
import { selectAuth } from "../../../redux/slices/authSlice";
import { useDeletePostMutation } from "../../../redux/services/postApi";

const PostCardHeader = ({
  _id,
  avatar,
  createdAt,
  userName,
  postId,
  description,
}) => {
  const [open, setOpen] = useState(false);
  const domNode = useClickOutside(() => setOpen(false));
  const dispatch = useDispatch();
  const {
    user: { _id: loggedInUserId },
  } = useSelector(selectAuth);

  const handleEdit = () => {
    dispatch(togglePostModal());
    dispatch(
      updateEditPostData({
        isEditModal: true,
        description,
        postId,
      })
    );
  };

  const [deletePost, { isLoading, isSuccess, isError, error }] =
    useDeletePostMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Post Deleted!");
    }

    if (isError) {
      toast.error(error?.data?.message || "Post could not be deleted!");
    }
  }, [isSuccess, isError, error]);

  return (
    <div className="flex justify-between mb-4 items-center">
      <div className="flex items-center gap-4">
        <Link to={`/home/profile/${_id}`}>
          <figure className="avatar avatar-sm cursor-pointer">
            <img
              className="avatar-img"
              src={avatar.secure_url}
              alt="useravatar"
            />
          </figure>
        </Link>
        <div className="flex-col">
          <p className="text-2xl text-left">{userName}</p>
          <p className="text-xl text-gray-500">
            {new Date(createdAt).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {loggedInUserId === _id ? (
        <div className="menu" ref={domNode}>
          <BiDotsVerticalRounded
            className="icons text-gray-700"
            onClick={() => setOpen((val) => !val)}
          />
          <ul className={`menu__items bg-slate-100 ${open ? "active" : ""}`}>
            <li>
              <FormButton
                text="Edit"
                classes="py-2 px-6 w-full"
                handleClick={handleEdit}
              />
            </li>
            <li>
              <FormButton
                text="Delete"
                isLoading={isLoading}
                classes="py-2 px-6 w-full"
                handleClick={() => deletePost(postId)}
              />
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default PostCardHeader;
