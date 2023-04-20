import axios from "axios";

export function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then(function (response) {
        console.log(response);
        event.target.reset;
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };
  return (
    <div className="login">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input className="box" name="email" type="email" placeholder="Email" required></input>
        </div>
        <div>
          <input className="box" name="password" type="password" placeholder="Password" required></input>
        </div>
        <button className="submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
