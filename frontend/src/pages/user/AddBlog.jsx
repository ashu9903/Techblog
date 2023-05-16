import axios from "axios";
import React, { useState, useContext } from "react";
import { BlogContext } from "../../App";

export default function AddBlog() {
  const { login } = useContext(BlogContext);
  const [blogData, setblogData] = useState({
    title: "First Blog",
    subHeading: "Awesome Blog",
    desc: "first blog desc",
    readTime: "1 Min",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    publish: true,
    category: "react",
  });
  const addBlog = async () => {
    const { data } = await axios.post("/blogs", {
      ...blogData,
      userId: login.id,
    });
  };
  return (
    <>
      {JSON.stringify(blogData)}
      <div class="container">
        <div class="row">
          <div class="col-sm-8 offset-sm-2">
            <div class="card">
              <div class="card-header">Add Blog</div>
              <div class="card-body">
                <div>
                  <label for="task" class="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    value={blogData.title}
                    onChange={(e) =>
                      setblogData({ ...blogData, title: e.target.value })
                    }
                    id="task"
                    placeholder="Enter Blog Title"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please add task.</div>
                </div>
                <div>
                  <label for="task" class="form-label">
                    Sub Heading
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    value={blogData.subHeading}
                    onChange={(e) =>
                      setblogData({ ...blogData, subHeading: e.target.value })
                    }
                    id="task"
                    placeholder="Enter Sub Heading"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please add task.</div>
                </div>
                <div>
                  <label for="task" class="form-label">
                    Read Time
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    value={blogData.readTime}
                    onChange={(e) =>
                      setblogData({ ...blogData, readTime: e.target.value })
                    }
                    id="task"
                    placeholder="Enter Read Time"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please add task.</div>
                </div>
                <div>
                  <label for="task" class="form-label">
                    Blog Image
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    value={blogData.image}
                    onChange={(e) =>
                      setblogData({ ...blogData, image: e.target.value })
                    }
                    id="task"
                    placeholder="Enter Image URL"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please add task.</div>
                </div>
                <div class="mt-2">
                  <label for="desc" class="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    value={blogData.desc}
                    onChange={(e) =>
                      setblogData({ ...blogData, desc: e.target.value })
                    }
                    id="desc"
                    placeholder="Enter task description"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please add description</div>
                </div>
                <div class="mt-2">
                  <label for="priority"> Category</label>
                  <select
                    class="form-select"
                    value={blogData.category}
                    onChange={(e) =>
                      setblogData({ ...blogData, category: e.target.value })
                    }
                    id="priority"
                  >
                    <option selected>Select Category</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="js">JS</option>
                    <option value="react">React</option>
                  </select>
                </div>

                <div class="form-check form-switch my-3">
                  <input
                    class="form-check-input"
                    checked={blogData.publish}
                    onChange={(e) =>
                      setblogData({ ...blogData, publish: e.target.checked })
                    }
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label class="form-check-label" for="flexSwitchCheckDefault">
                    Publish
                  </label>
                </div>
                <button
                  onClick={addBlog}
                  type="button"
                  class="btn btn-primary w-100 mt-3"
                >
                  Add Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
