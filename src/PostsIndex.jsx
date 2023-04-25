import { Link } from "react-router-dom";

export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <img src={post.image} />
          <p>{post.body}</p>
          <button className="btn" style={{ color: "white" }} onClick={() => props.onShowPost(post)}>
            More Info
          </button>
          <Link className="btn" style={{ color: "white" }} to={`/posts/${post.id}`}>
            View Post
          </Link>
        </div>
      ))}
    </div>
  );
}
