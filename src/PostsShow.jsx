export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(params, props.post.id);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDeletePost(props.post);
  };
  return (
    <div id="posts-show">
      <h3>{props.post.title}</h3>
      <img src={props.post.image} />
      <p>{props.post.body}</p>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Title: <input defaultValue={props.post.title} name="title" type="text" />
          </label>
        </p>
        <p>
          <label>
            Body: <input defaultValue={props.post.body} name="body" type="text" />
          </label>
        </p>
        <p>
          <label>
            Image: <input defaultValue={props.post.image} name="image" type="text" />
          </label>
        </p>
        <p>
          <button className="submit" type="submit">
            Submit
          </button>
        </p>
      </form>
      <button onClick={handleClick} type="Submit">
        Delete Post
      </button>
    </div>
  );
}
