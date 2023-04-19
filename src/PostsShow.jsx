export function PostsShow(props) {
  return (
    <div>
      <h3>{props.post.title}</h3>
      <img src={props.post.image} />
      <p>{props.post.body}</p>
    </div>
  );
}
