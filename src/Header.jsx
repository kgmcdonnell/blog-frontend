import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "white" }}>
            Kathleen's Blog
          </a>
          <button
            style={{ background: "white" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" style={{ color: "white" }} to="/">
                Home
              </Link>
              <Link className="nav-link" style={{ color: "white" }} to="/posts">
                All Posts
              </Link>
              <Link className="nav-link" style={{ color: "white" }} to="/posts/new">
                New Post
              </Link>
              <Link className="nav-link" style={{ color: "white" }} to="/about">
                About
              </Link>

              {localStorage.jwt === undefined ? (
                <>
                  <Link className="nav-link" style={{ color: "white" }} to="/signup">
                    Signup
                  </Link>
                  <Link className="nav-link" style={{ color: "white" }} to="/login">
                    Login
                  </Link>
                </>
              ) : (
                <LogoutLink />
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
