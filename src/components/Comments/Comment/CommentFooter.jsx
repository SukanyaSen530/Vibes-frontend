import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { MdModeEditOutline, MdDelete, MdQuickreply } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";

import useClickOutside from "../../../hooks/useClickOutside";
import {
  useDeleteCommentMutation,
  useLikeCommentMutation,
  useDislikeCommentMutation,
} from "../../../redux/services/commentApi";

import { FullLoader } from "../../";
import {
  toggleCommentModal,
  updateEditCommentData,
} from "../../../redux/slices/commentModalSlice";
import { selectAuth } from "../../../redux/slices/authSlice";

const CommentFooter = ({ comment }) => {
  const { _id, content, postId, likes, user } = comment || {};
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const domNode = useClickOutside(() => setOpen(false));
  const {
    user: { _id: loggedInUserId },
  } = useSelector(selectAuth);

  const isLiked = likes?.find((like) => like === loggedInUserId);

  const [
    deleteComment,
    {
      isLoading: isDeleteCommentLoading,
      isSuccess: isCommentDeleteSuccess,
      isError: isCommentDeleteError,
      error: commentDeleteError,
    },
  ] = useDeleteCommentMutation();

  const [
    likeComment,
    {
      isLoading: isLikeCommentLoading,
      isSuccess: isCommentLikeSuccess,
      isError: isCommentLikeError,
      error: commentLikeError,
    },
  ] = useLikeCommentMutation();

  const [
    dislikeComment,
    {
      isLoading: isDislikeCommentLoading,
      isSuccess: isCommentDislikeSuccess,
      isError: isCommentDislikeError,
      error: commentDislikeError,
    },
  ] = useDislikeCommentMutation();

  //for delete
  useEffect(() => {
    if (isCommentDeleteSuccess) {
      toast.success("Comment Deleted!");
    }

    if (isCommentDeleteError) {
      toast.error(
        commentDeleteError?.data?.message || "Could not delete the comment!"
      );
    }
  }, [isCommentDeleteSuccess, isCommentDeleteError, commentDeleteError]);

  //for like
  useEffect(() => {
    if (isCommentLikeSuccess) {
      toast.success("Comment Liked!");
    }

    if (isCommentLikeError) {
      toast.error(
        commentLikeError?.data?.message || "Could not like the comment!"
      );
    }
  }, [isCommentLikeSuccess, isCommentLikeError, commentLikeError]);

  //for dislike
  useEffect(() => {
    if (isCommentDislikeError) {
      toast.success("Comment Disliked!");
    }

    if (commentDislikeError) {
      toast.error(
        commentDislikeError?.data?.message || "Could not dislike the comment!"
      );
    }
  }, [isCommentDislikeError, isCommentDislikeSuccess, commentDislikeError]);

  const handleDelete = () => {
    setOpen(false);
    deleteComment({ commentId: _id, postId });
  };

  const handleUpdate = () => {
    dispatch(toggleCommentModal());
    dispatch(
      updateEditCommentData({
        isEditModal: true,
        content,
        commentId: _id,
      })
    );
  };

  const handleLike = () => {
    if (isLiked) {
      dislikeComment(_id);
    } else {
      likeComment(_id);
    }
  };

  return (
    <>
      {isDeleteCommentLoading ||
      isLikeCommentLoading ||
      isDislikeCommentLoading ? (
        <FullLoader />
      ) : null}
      <div className="menu" ref={domNode}>
        <BiDotsVerticalRounded
          className="text-4xl text-gray-700 cursor-pointer"
          onClick={() => setOpen((val) => !val)}
        />
        <ul
          className={`menu__items bg-slate-300 flex gap-4 text-2xl justify-end ${
            open ? "active" : ""
          }`}
        >
          <li className="flex gap-1 items-center cursor-pointer hover:text-blue-600 duration-150">
            <MdQuickreply /> Reply
          </li>

          {loggedInUserId === user._id ? (
            <>
              <li
                className="flex gap-1 items-center cursor-pointer hover:text-blue-600 duration-150"
                onClick={handleUpdate}
              >
                <MdModeEditOutline />
                Edit
              </li>
              <li
                className="flex gap-1 items-center cursor-pointer hover:text-blue-600 duration-150"
                onClick={handleDelete}
              >
                <MdDelete />
                Delete
              </li>
            </>
          ) : null}
        </ul>
      </div>

      <div>
        {isLiked ? (
          <AiFillHeart
            className="ml-auto text-4xl flex-shrink-0 text-red-500"
            onClick={handleLike}
          />
        ) : (
          <AiOutlineHeart
            className="ml-auto text-4xl flex-shrink-0"
            onClick={handleLike}
          />
        )}
        <span>{likes?.length || 0} likes</span>
      </div>
    </>
  );
};

export default CommentFooter;
