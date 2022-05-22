import { useSelector, useDispatch } from "react-redux";
import {
  SidebarSecondary,
  PostCard,
  FullLoader,
  UserDetail,
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

  return (
    <section className="feed flex">
      {isLoading ? <FullLoader /> : null}

      <div className="flex-1 px-12 text-justify bg-slate-100 my-8 mx-12 rounded-2xl">
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

        {data?.posts?.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>

      <div className="feed__sidebar sticky">
        <SidebarSecondary />
      </div>
    </section>
  );
};

export default Feed;
