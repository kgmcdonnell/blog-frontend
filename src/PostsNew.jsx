export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <p>
          <label>
            Title: <input type="text" />
          </label>
        </p>
        <p>
          <label>
            Body: <input type="text" />
          </label>
        </p>
        <p>
          <label>
            Image: <input type="file" />
          </label>
        </p>
        <p>
          <button class="submit" type="submit">
            Submit
          </button>
        </p>
      </form>
    </div>
  );
}
