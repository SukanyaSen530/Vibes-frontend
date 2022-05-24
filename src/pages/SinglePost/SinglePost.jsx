import { useParams } from "react-router-dom";

import { Caraousel, ErrorComponent, Skeletal } from "../../components";
import PostCardBody from "../../components/Cards/PostCard/PostCardBody";
import PostFooter from "../../components/Cards/PostCard/PostFooter";
import PostCardHeader from "../../components/Cards/PostCard/PostCardHeader";

import { useGetPostQuery } from "../../redux/services/postApi";

import "./single-post.scss";

const Comment = () => {
  const { postId } = useParams();

  const { data, isLoading, error } = useGetPostQuery(postId);

  const { post } = data || {};

  const {
    description,
    images,
    likes,
    comments: hhehr,
    createdAt,
    user,
  } = post || {};

  const comments = [1, 2, 3, 4, 4, 3, 2, 3, 3, 33, 3, 1, 2, 2, 2];

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
      <article className="content flex">
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
              {comments?.map((comment) => (
                <div className="flex my-8 items-start text-xl gap-6 text-justify">
                  <figure className="avatar avatar-sm cursor-pointer flex-shrink-0">
                    <img
                      className="avatar-img"
                      src={user?.avatar?.secure_url}
                      alt="useravatar"
                    />
                  </figure>
                  <div>
                    <span className="font-bold">{user?.userName}</span>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                    </span>
                  </div>
                  {/* <AiOutlineHeart className="ml-auto text-4xl flex-shrink-0" /> */}
                </div>
              ))}
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

          <div className="flex mx-4 gap-4 items-center py-2">
            <input
              type="text"
              placeholder="Add a comment..."
              className="outline-0 text-2xl w-full"
            />
            <button className="bg-blue-300 rounded-lg py-2 px-12 text-3xl hover:bg-blue-500 hover:text-white ease-in duration-150">
              Post
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Comment;
