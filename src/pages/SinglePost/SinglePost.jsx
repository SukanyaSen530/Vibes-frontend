import { useParams } from "react-router-dom";

import {
  Caraousel,
  ErrorComponent,
  Skeletal,
  Comments,
  CommentForm,
} from "../../components";
import { toggleCommentModal } from "../../redux/slices/commentModalSlice";
import PostCardBody from "../../components/Cards/PostCard/PostCardBody";
import PostFooter from "../../components/Cards/PostCard/PostFooter";
import PostCardHeader from "../../components/Cards/PostCard/PostCardHeader";
import { selectCommentModal } from "../../redux/slices/commentModalSlice";
import { useDispatch, useSelector } from "react-redux";

import { useGetPostQuery } from "../../redux/services/postApi";

import "./single-post.scss";

const Comment = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetPostQuery(postId);

  const { post } = data || {};
  const { description, images, likes, comments, createdAt, user } = post || {};
  const { isOpen } = useSelector(selectCommentModal);

  if (isLoading) {
    return <Skeletal type="single_post" num={1} />;
  }

  if (error) {
    return (
      <ErrorComponent type="error" text="Error loading the current post" />
    );
  }

  if (!post) {
    return (
      <ErrorComponent text="The post you are looking for does not exists!" />
    );
  }

  return (
    <section className="single-post">
      <article className="content flex flex-col sm:flex-row">
        <div className="flex p-2 items-center justify-center basis-2/5">
          <div className="w-full">
            <Caraousel images={images} />
            <PostCardBody description={description} />
          </div>
        </div>

        <div className="content__details flex flex-col border-l-2 basis-3/5 rounded-2xl">
          <div className="pt-4 px-4">
            <PostCardHeader
              {...user}
              createdAt={createdAt}
              postId={postId}
              description={description}
            />
          </div>

          {/* Comments */}
          <div className="flex-1 relative border-t-2">
            <div className="absolute top-0 bottom-0 right-0 left-0 overflow-y-auto px-4">
              <Comments postId={postId} />
            </div>
          </div>

          <div className="border-t-2 border-b-2 px-4 py-2">
            <PostFooter
              postId={postId}
              likes={likes}
              comments={comments}
              user={user}
              showComments={false}
            />
          </div>

          <div className="flex mx-4 gap-4 items-center py-4">
            <input
              type="text"
              placeholder="Add a comment..."
              className="outline-0 text-2xl w-full"
              onFocus={() => dispatch(toggleCommentModal())}
            />
          </div>
        </div>
      </article>
      {isOpen ? <CommentForm postId={postId} /> : null}
    </section>
  );
};

export default Comment;
