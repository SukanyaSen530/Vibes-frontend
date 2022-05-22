import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { BiDotsVerticalRounded } from "react-icons/bi";

import useClickOutside from "../../../hooks/useClickOutside";
import { FormButton, UserDetail } from "../../";
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
      <UserDetail
        id={_id}
        avatar={avatar}
        createdAt={createdAt}
        userName={userName}
      />

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
