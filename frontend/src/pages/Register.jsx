import React, { useState, useContext } from "react";
import { BlogContext } from "../App";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [userData, setuserData] = useState({
    name: "john",
    email: "john@gmail.com",
    password: "123",
    cpassword: "123",
  });
  const registerUser = async (e) => {
    const { data } = await axios.post("/users", userData);
    console.log(data);
  };

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div class="card">
              <div class="card-header">Signup</div>
              <div class="card-body">
                <div>
                  <label for="name" class="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    value={userData.name}
                    onChange={(e) =>
                      setuserData({ ...userData, name: e.target.value })
                    }
                    class="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div class="mt-2">
                  <label for="email" class="form-label">
                    First Email
                  </label>
                  <input
                    type="text"
                    value={userData.email}
                    onChange={(e) =>
                      setuserData({ ...userData, email: e.target.value })
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
                    type="text"
                    value={userData.password}
                    onChange={(e) =>
                      setuserData({ ...userData, password: e.target.value })
                    }
                    class="form-control"
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a password.</div>
                </div>
                <div class="mt-2">
                  <label for="cpassword" class="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    value={userData.cpassword}
                    onChange={(e) =>
                      setuserData({ ...userData, cpassword: e.target.value })
                    }
                    class="form-control"
                    id="cpassword"
                    placeholder="Confirm Your Password"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">
                    Please Recheck Your Password.
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary w-100 mt-3"
                  onClick={registerUser}
                >
                  Sign up
                </button>
                <p class="text-center mt-3">
                  Already Have Account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
