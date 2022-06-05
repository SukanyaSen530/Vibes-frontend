import { useSelector, useDispatch } from "react-redux";
import {
  SidebarSecondary,
  PostCard,
  UserDetail,
  EmptyState,
  Skeletal,
} from "../../components";
import { useGetAllPostsQuery } from "../../redux/services/postApi";
import { selectAuth } from "../../redux/slices/authSlice";
import { togglePostModal } from "../../redux/slices/postSlice";

import "./feed.scss";

const Feed = () => {
  const {
    user: { _id: loggedInUserId, avatar, userName, fullName },
  } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetAllPostsQuery();

  let content = null;

  if (isLoading) {
    content = <Skeletal type="post" />;
  } else {
    content = data?.posts?.map((post) => <PostCard key={post._id} {...post} />);
  }

  if (!isLoading && data?.posts?.length === 0) {
    content = <EmptyState type="feed" />;
  }

  if (error) {
    content = <p>Error loading posts!</p>;
  }

  return (
    <section className="feed flex flex-col-reverse sm:flex-row">
      <div className="flex-1 text-justify px-2 mx-4 bg-slate-100 rounded-2xl sm:my-8 lg:mx-12 lg:px-12">
        <div className="flex gap-4 rounded-lg items-center feed__post">
          <UserDetail
            avatar={avatar}
            userName={userName}
            fullName={fullName}
            id={loggedInUserId}
          />
          <input
            className="feed__post__input w-full p-4 text-xl focus:outline-none"
            placeholder={`${userName} What's on your mind?`}
            onFocus={() => dispatch(togglePostModal())}
          />
        </div>

        {content}
      </div>

      <div className="feed__sidebar sticky">
        <SidebarSecondary />
      </div>
    </section>
  );
};

export default Feed;
