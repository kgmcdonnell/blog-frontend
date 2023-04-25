import axios from "axios";

export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
    window.location.href = "/";
  };

  return (
    <div className="text-center" id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            <input name="title" type="text" placeholder="Title" />
          </label>
        </p>
        <p>
          <label>
            <input name="body" type="text" placeholder="Post Text" />
          </label>
        </p>
        <p>
          <label>
            <input name="image" type="text" placeholder="image url" />
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
