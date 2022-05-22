import {
  emptyFeed,
  epmtyPosts,
  emptySaved,
  emptyLikes,
  allCaughtUp,
  empty,
} from "../../assets/images";

import "./empty-state.scss";

const EmptyState = ({ type, text = "" }) => {
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
  } else if (type === "caught-up") {
    source = allCaughtUp;
    altText = "all_caught_up";
    emptyText = "All caught up!";
  } else {
    source = empty;
    altText = "empty";
    emptyText = text ? text : "Empty!";
  }

  return (
    <div className="emptystate">
      <img src={source} alt={altText} className="emptystate__image" />
      <p className="emptystate__text">{emptyText}</p>
    </div>
  );
};

export default EmptyState;
