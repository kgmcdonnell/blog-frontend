import axios from "axios";

export function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then(function (response) {
        console.log(response);
        event.target.reset();
      })
      .catch(function (error) {
        console.log(error.response.data.errors);
      });
  };

  return (
    <div className="singnup">
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input className="box" type="text" name="name" placeholder="Name" required />
        </div>
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
