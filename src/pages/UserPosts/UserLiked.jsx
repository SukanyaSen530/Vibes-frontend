import {
  ImagePostCard,
  Skeletal,
  EmptyState,
  ErrorComponent,
} from "../../components";
import { useGetLikedPostsQuery } from "../../redux/services/postApi";

import "./common-user.scss";

function UserLiked() {
  const { data, isLoading, error } = useGetLikedPostsQuery();
  let content = null;

  if (isLoading) {
    content = <Skeletal num={5} />;
  } else {
    content = data?.likedPosts?.map((post) => (
      <ImagePostCard key={post._id} {...post} />
    ));
  }

  if (data?.likedPosts?.length === 0 && !isLoading) {
    return <EmptyState type="likes" />;
  }

  if (error) {
    return <ErrorComponent type="error" text="Error loading liked posts!" />;
  }

  return <div className="image-container">{content}</div>;
}

export default UserLiked;
