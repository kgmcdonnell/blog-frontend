import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}
export function Login() {
  const [errors, setErrors] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    console.log("handleSubmit");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then(function (response) {
        console.log(response);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset;
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(["Invalid email or password"]);
      });
  };
  return (
    <div className="login">
      <h3>Login</h3>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
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
