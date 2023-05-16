import React from "react";
import { useContext } from "react";
import { BlogContext } from "../../App";

export default function Profile() {
  const { login } = useContext(BlogContext);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="card mt-5">
              <div className="card-body">
                <h1>{login.name}</h1>
                <p>{login.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
