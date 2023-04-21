import axios from "axios";
export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch(`http://localhost:3000/posts/${props.post.id}.json`, params).then((response) => {
      console.log(response.data);
      event.target.reset();
    });
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
    </div>
  );
}
