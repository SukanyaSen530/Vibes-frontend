import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { SaveButton, LikeButton, ShareButton } from "../../";
import { FaRegComment } from "react-icons/fa";

import {
  useLikePostMutation,
  useDislikePostMutation,
  useSavePostMutation,
  useUnsavePostMutation,
} from "../../../redux/services/postApi";

import { selectAuth } from "../../../redux/slices/authSlice";
import { toast } from "react-toastify";

const PostFooter = ({ postId, likes, comments }) => {
  const { user: loggedInUser } = useSelector(selectAuth);
  const { _id: loggedInUserId, saved } = loggedInUser;

  const isLiked = likes?.find((like) => like === loggedInUserId);
  const isSaved = saved?.find((save) => save === postId);

  const [
    likePost,
    {
      isLoading: likeLoading,
      isSuccess: islikeSuccess,
      isError: islikeError,
      error: likeError,
    },
  ] = useLikePostMutation();

  const [
    dislikePost,
    {
      isLoading: dislikeLoading,
      isSuccess: isDislikeSuccess,
      isError: isDislikeError,
      error: dislikeError,
    },
  ] = useDislikePostMutation();

  const [
    savePost,
    {
      isLoading: saveLoading,
      isSuccess: isSaveSuccess,
      isError: isSaveError,
      error: saveError,
    },
  ] = useSavePostMutation();
  const [
    unsavePost,
    {
      isLoading: unsaveLoading,
      isSuccess: isUnsaveSuccess,
      isError: isUnsaveError,
      error: unsaveError,
    },
  ] = useUnsavePostMutation();

  useEffect(() => {
    if (islikeSuccess) {
      toast.success("Liked!");
    }
    if (islikeError) {
      toast.error(likeError?.data?.message || "Can not like the post now!");
      console.log(likeError?.data);
    }

    if (isDislikeSuccess) {
      toast.success("Disliked!");
    }
    if (isDislikeError) {
      toast.error(dislikeError?.data?.message || "Can not like the post now!");
      console.log(dislikeError?.data);
    }
  }, [
    islikeSuccess,
    islikeError,
    likeError,
    isDislikeSuccess,
    isDislikeError,
    dislikeError,
  ]);

  useEffect(() => {
    if (isSaveSuccess) {
      toast.success("Saved!");
    }
    if (isSaveError) {
      toast.error(saveError?.data?.message || "Can not like the post now!");
      console.log(saveError?.data);
    }

    if (isUnsaveSuccess) {
      toast.success("Unsaved!");
    }
    if (isUnsaveError) {
      toast.error(unsaveError?.data?.message || "Can not like the post now!");
      console.log(unsaveError?.data);
    }
  }, [
    isSaveSuccess,
    isSaveError,
    saveError,
    isUnsaveError,
    isUnsaveSuccess,
    unsaveError,
  ]);

  const handleLike = () => {
    if (isLiked) {
      dislikePost(postId);
    } else {
      likePost(postId);
    }
  };

  const handleSave = () => {
    if (isSaved) {
      unsavePost(postId);
    } else {
      savePost(postId);
    }
  };

  return (
    <>
      <div className="post-card__controls flex justify-between">
        <div className="flex gap-8">
          <LikeButton
            isLoading={likeLoading || dislikeLoading}
            handleLike={handleLike}
            isLiked={isLiked}
          />

          <Link to={`/home/post/${postId}`}>
            <FaRegComment className="icons" />
          </Link>

          <ShareButton postId={postId} />
        </div>

        <SaveButton
          isSaved={isSaved}
          handleSave={handleSave}
          isLoading={saveLoading || unsaveLoading}
        />
      </div>
      <p className="text-gray-500 text-xl pt-2">
        {likes?.length || 0} likes, {comments?.length || 0} comments!
      </p>
    </>
  );
};

export default PostFooter;
