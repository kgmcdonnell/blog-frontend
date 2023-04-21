import axios from "axios";

export function PostsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/posts", params).then(function (response) {
      console.log(response);
      event.target.reset();
      window.location.href = "/";
    });
  };

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Title: <input name="title" type="text" />
          </label>
        </p>
        <p>
          <label>
            Body: <input name="body" type="text" />
          </label>
        </p>
        <p>
          <label>
            Image: <input name="image" type="text" />
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
