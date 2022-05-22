import { EmptyState, ImagePostCard, Skeletal } from "../../components";
import { useGetDiscoverPostsQuery } from "../../redux/services/postApi";

import "./explore.scss";

const Explore = () => {
  const { data, isLoading, error } = useGetDiscoverPostsQuery();

  let content = null;

  if (isLoading) {
    content = <Skeletal num={7} />;
  } else {
    content = data?.posts?.map((post) => (
      <ImagePostCard key={post._id} {...post} />
    ));
  }

  if (data?.posts?.length === 0 && !isLoading) {
    content = <EmptyState type="caught-up" />;
  }

  if (error) {
    content = (
      <p className="text-red-500 text-medium my-8">Error loading more posts!</p>
    );
  }

  return (
    <section className="explore">
      <div className="image-container">{content}</div>
    </section>
  );
};

export default Explore;
