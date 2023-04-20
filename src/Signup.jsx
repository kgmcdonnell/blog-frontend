export function Signup() {
  return (
    <div className="singnup">
      <h3>Signup</h3>
      <form method="POST" action="http://localhost:3000/users.json">
        <div>
          <input class="box" type="text" name="name" placeholder="Name" required />
        </div>
        <div>
          <input class="box" type="email" name="email" placeholder="Email" required />
        </div>
        <div>
          <input class="box" type="password" name="password" placeholder="Password" required />
        </div>
        <div>
          <input
            class="box"
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            required
          />
        </div>
        <button class="submit" type="submit" value="Login">
          Submit
        </button>
      </form>
    </div>
  );
}
