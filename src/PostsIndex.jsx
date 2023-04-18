export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h3>{post.title}</h3>
          <img src={post.image} />
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
