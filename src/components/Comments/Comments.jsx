import Comment from "./Comment";
import { ErrorComponent } from "../";
import { useGetCommentsQuery } from "../../redux/services/commentApi";

const Comments = ({ postId }) => {
  const { data, error } = useGetCommentsQuery(postId);

  const comments = data?.comments || [];

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
        <Comment key={comment._id} {...comment} />
      ))}
    </div>
  );
};

export default Comments;
