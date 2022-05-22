import { useParams } from "react-router-dom";
import {
  ImagePostCard,
  Skeletal,
  EmptyState,
  ErrorComponent,
} from "../../components";
import { useGetUserPostsQuery } from "../../redux/services/postApi";

import "./common-user.scss";

function UserPosts() {
  const { userId } = useParams();
  const { data, isLoading, error } = useGetUserPostsQuery(userId);

  let content = null;

  if (isLoading) {
    content = <Skeletal num={5} />;
  } else {
    content = data?.posts?.map((post) => (
      <ImagePostCard key={post._id} {...post} />
    ));
  }

  if (data?.posts?.length === 0 && !isLoading) {
    return <EmptyState type="posts" />;
  }

  if (error) {
    return <ErrorComponent type="error" text=" Error loading more posts!" />;
  }

  return <div className="image-container">{content}</div>;
}

export default UserPosts;
