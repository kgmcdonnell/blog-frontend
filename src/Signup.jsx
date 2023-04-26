import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  // variable for the status of the request
  const [status, setStatus] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then(function (response) {
        console.log(response);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch(function (error) {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
        setStatus(error.response.status);
      });
  };

  return (
    <div className="signup text-center">
      <h3>Signup</h3>

      {errors.map((error) => (
        <p key={error}>{error}</p>
      ))}

      {status ? <img style={{ width: "300px", margin: "10px" }} src={`https://http.cat/${status}`} /> : null}

      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="box"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={20}
            required
          />
        </div>
        <small>{20 - name.length} characters remaining</small>
        <div>
          <input className="box" type="email" name="email" placeholder="Email" required />
        </div>
        <div>
          <input className="box" type="password" name="password" placeholder="Password" required />
        </div>
        <div>
          <input
            className="box"
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            required
          />
        </div>
        <button className="submit" type="submit" value="Login">
          Submit
        </button>
      </form>
    </div>
  );
}
