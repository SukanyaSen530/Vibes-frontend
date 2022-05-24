import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { MdModeEditOutline, MdDelete, MdQuickreply } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";

import useClickOutside from "../../../hooks/useClickOutside";
import { useDeleteCommentMutation } from "../../../redux/services/commentApi";
import { FullLoader } from "../../";
import {
  toggleCommentModal,
  updateEditCommentData,
} from "../../../redux/slices/commentModalSlice";

const CommentFooter = ({ comment }) => {
  const { _id, content, postId } = comment || {};
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const domNode = useClickOutside(() => setOpen(false));

  const [
    deleteComment,
    {
      isLoading: isDeleteCommentLoading,
      isSuccess: isCommentDeleteSuccess,
      isError: isCommentDeleteError,
      error: commentDeleteError,
    },
  ] = useDeleteCommentMutation();

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

  return (
    <>
      {isDeleteCommentLoading ? <FullLoader /> : null}
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
        </ul>
      </div>

      <AiOutlineHeart className="ml-auto text-4xl flex-shrink-0" />
    </>
  );
};

export default CommentFooter;
