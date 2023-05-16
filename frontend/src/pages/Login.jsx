import React, { useEffect, useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BlogContext } from "../App";

export default function Login() {
  const navigate = useNavigate();
  const { users, getAllUsers, setlogin } = useContext(BlogContext);
  const [errors, seterrors] = useState();
  const [loginData, setloginData] = useState({
    email: "john@gmail.com",
    password: "123",
  });
  useEffect((e) => {
    getAllUsers();
  }, []);

  const handleLogin = () => {
    const result = users.find(
      (item) =>
        item.email === loginData.email && item.password === loginData.password
    );
    // !result
    //    ? navigate("/user/account")
    //   : seterrors("Invalid Email or password")

    if (result) {
      localStorage.setItem("localLogin", JSON.stringify(result));
      setlogin(result);
      navigate("/user/account");
    } else {
      seterrors("Invalid Email or password");
    }
  };

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            {errors && <div className="alert alert-danger">{errors}</div>}
            <div class="card">
              <div class="card-header">Login</div>
              <div class="card-body">
                <div>
                  <label for="email" class="form-label">
                    First Email
                  </label>
                  <input
                    type="text"
                    value={loginData.email}
                    onChange={(e) =>
                      setloginData({ ...loginData, email: e.target.value })
                    }
                    class="form-control"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div class="mt-2">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) =>
                      setloginData({ ...loginData, password: e.target.value })
                    }
                    class="form-control"
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <button
                  onClick={handleLogin}
                  type="submit"
                  class="btn btn-primary w-100 mt-3"
                >
                  Login
                </button>
                <p class="text-center mt-3">
                  Dont Have Account? <Link to="/register">Create Account</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
