import {
  emptyFeed,
  epmtyPosts,
  emptySaved,
  emptyLikes,
  emptySuggestion,
} from "../../assets/images";

import "./empty-state.scss";

const EmptyState = ({ type }) => {
  let source = null,
    altText = null,
    emptyText = null;

  if (type === "likes") {
    source = emptyLikes;
    altText = "no_liked_posts";
    emptyText = "Start liking posts to get updates!";
  } else if (type === "feed") {
    source = emptyFeed;
    altText = "no_following";
    emptyText = "Start following people or posting to get updates!";
  } else if (type === "posts") {
    source = epmtyPosts;
    altText = "no_posts";
    emptyText = "You have not created any posts yet!";
  } else if (type === "saved") {
    source = emptySaved;
    altText = "no_saved_posts";
    emptyText = "Start saving posts to get updates!";
  } else if (type === "suggestion") {
    source = emptySuggestion;
    altText = "no_suggestions";
    emptyText = "All caught up!";
  } else {
    return <p>Empty Page</p>;
  }

  return (
    <div className="emptystate">
      <img src={source} alt={altText} className="emptystate__image" />
      <p className="emptystate__text">{emptyText}</p>
    </div>
  );
};

export default EmptyState;
