import { Link } from "react-router-dom";
import { useState } from "react";

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <input
        list="titles"
        type="text"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
        placeholder="search"
      />

      {/* id of datalist matches list value in search input */}
      <datalist id="titles">
        {props.posts.map((post) => (
          <option key={post.id}>{post.title}</option>
        ))}
      </datalist>

      {props.posts
        .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((post) => (
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
