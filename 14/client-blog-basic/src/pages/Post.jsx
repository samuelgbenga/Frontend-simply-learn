import { Link, useLoaderData } from "react-router-dom";
import { getComments } from "../api/comments";
import { getPost } from "../api/posts";
import { getUser } from "../api/users";

const Post = () => {
  const { comments, post, user } = useLoaderData();

  return (
    <>
      <h1 className="page-title">{post.title}</h1>
      <span className="page-subtitle">
        By: <Link to={`/users/${user.id}`}>{user.name}</Link>
      </span>
      <div>{post.body}</div>

      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {comments.map((comment) => (
          <div key={comment.id} className="card">
            <div className="card-body">
              <div className="text-sm mb-1">{comment.email}</div>
              {comment.body}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

async function loader({ request: { signal }, params: { postId } }) {
  // Fetch comments for the post using the postId and signal
  const comments = getComments(postId, { signal });

  // Fetch the post itself using the postId and signal, waiting for it to complete
  const post = await getPost(postId, { signal });

  // Fetch the user who created the post using the post's userId and signal
  const user = getUser(post.userId, { signal });

  // Return an object containing the fetched data, waiting for the comments and user to complete
  return { comments: await comments, post, user: await user };
}

export const postRoute = {
  loader,
  element: <Post />,
};
