import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { AdminContext } from "../../App";

export default function Dashboard() {
  const [userBlogs, setuserBlogs] = useState([]);
  const { getAllUsers, users } = useContext(AdminContext);
  const [active, setactive] = useState();
  const getUserBlogs = async (id) => {
    const { data } = await axios.get("/blogs");
    const filteredData = data.filter((item) => item.userId === id);
    setuserBlogs(filteredData);
    setactive(id);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          {users.map((item) => (
            <div class="card  ">
              <div class={`card-body $ {item.id === active && "bg-success"}`}>
                <h2>{item.title}</h2>
                <button type="button" class="btn-btn-warning"></button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-sm-4">
          {userBlogs.map((item) => (
            <div class="card ">
              <div class="card-body">
                <h2>{item.name}</h2>
                <button
                  onClick={(e) => getUserBlogs(item.id)}
                  type="button"
                  class="btn-btn-warning"
                ></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
