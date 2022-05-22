import {
  EmptyState,
  ImagePostCard,
  Skeletal,
  ErrorComponent,
} from "../../components";
import { useGetSavedPostsQuery } from "../../redux/services/postApi";

import "./common-user.scss";

function UserSaved() {
  const { data, isLoading, error } = useGetSavedPostsQuery();

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
    return <ErrorComponent type="error" text="Error loading saved posts!" />;
  }

  return <div className="image-container">{content}</div>;
}

export default UserSaved;
