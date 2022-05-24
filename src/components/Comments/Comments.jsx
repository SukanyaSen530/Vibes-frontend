import { ErrorComponent } from "../";
import Comment from "./Comment/Comment";
import { useGetCommentsQuery } from "../../redux/services/commentApi";

const Comments = ({ postId }) => {
  const { data, error } = useGetCommentsQuery(postId);
  const comments = data?.comments || [];

  console.log(comments);

  if (error) {
    return (
      <ErrorComponent
        type="error"
        text="Error loading the comments for this post"
      />
    );
  }

  return (
    <div>
      {comments?.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
