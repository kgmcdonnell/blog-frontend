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
              <a className="nav-link active" style={{ color: "white" }} aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" style={{ color: "white" }} href="#posts-index">
                All Posts
              </a>
              <a className="nav-link" style={{ color: "white" }} href="#posts-new">
                New Post
              </a>
              <LogoutLink />
              <Link to="/about">About</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
