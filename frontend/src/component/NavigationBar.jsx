import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../App";

export default function NavigationBar() {
  const { login, setlogin } = useContext(BlogContext);
  const handleLogout = (e) => {
    localStorage.removeItem("localLogin");
    setlogin(undefined);
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            TechBlogs
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" to="/">
                Home
              </Link>
              {!login && (
                <>
                  <Link class="nav-link" to="/login">
                    Login
                  </Link>
                  <Link class="nav-link" to="/register">
                    Register
                  </Link>
                </>
              )}
            </div>
            {login && (
              <div class="dropdown ms-auto">
                <button
                  class="btn btn-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                >
                  {login.name}
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link to="/user/profile" class="dropdown-item">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/user/add-blog" class="dropdown-item">
                      Create Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/user/account" class="dropdown-item">
                      Account
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} class="dropdown-item">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
