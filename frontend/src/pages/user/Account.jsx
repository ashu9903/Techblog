import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { BlogContext } from "../../App";

export default function Account() {
  const [filteredData, setfilteredData] = useState([]);
  const [active, setactive] = useState();
  const { login, blogs, getAllBlogs, setBlogs } = useContext(BlogContext);
  const filtered = blogs.filter((item) => item.userId == login.id);
  const [blogData, setblogData] = useState({
    show: false,
    title: "First Blog",
    subHeading: "Awesome Blog",
    desc: "first blog desc",
    readTime: "1 Min",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    publish: true,
    category: "react",
  });
  // console.log(filtered);
  const getdata = async () => {
    const res = await getAllBlogs({});
    setBlogs(res);
    console.log(res);
  };
  useEffect(() => {
    getdata();
  }, []);

  const handleEdit = (arg) => {
    setactive(arg.id);
    setblogData({ show: true, ...arg });
  };

  const updateBlog = async () => {
    const x = { ...blogData };
    delete x.show;
    const { data } = await axios.put(`/blogs/${active}`, x);
    setblogData({ show: false });
    setactive(undefined);
    getdata();
  };

  return (
    <>
      <div className="container">
        <h3>total blog {filtered.length}</h3>
        <div className="row">
          <div className="col-sm-6">
            <ul className="list-group">
              {filtered.map((item) => (
                <li
                  className={`list-group-item ${
                    item.id === active && "list-group-item-success"
                  }`}
                >
                  <h5>{item.title}</h5>
                  <p>{item.subHeading}</p>
                  <div className="d-flex mt-2 gap-2">
                    <button
                      onClick={(e) => handleEdit(item)}
                      className="btn btn-warning btn-sm"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>

                    {/* <button className='btn btn-danger btn-sm'><i className='bi bi-trash'
        onClick={ async  e => {
            await axios.delete(`/blogs/${item.id}`)
            getdata({})
            }} ></i></button> */}

                    <button
                      type="button"
                      className="btn btn-danger bi bi-trash"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                    ></button>
                    <div class="modal" id="myModal">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">
                              You want to remove this{" "}
                              <strong>{item.title}</strong>{" "}
                            </h5>

                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>
                          <div class="modal-body d-flex gap-3">
                            <button
                              onClick={async (e) => {
                                await axios.delete(`/blogs/${item.id}`);
                                getdata({});
                              }}
                              type="button"
                              class="btn btn-danger"
                              data-bs-dismiss="modal"
                            >
                              yes
                            </button>
                            <button
                              type="button"
                              class="btn btn-success"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-6">
            {blogData.show && (
              <>
                <div class="card border-success">
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
                          setblogData({
                            ...blogData,
                            subHeading: e.target.value,
                          })
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
                          setblogData({
                            ...blogData,
                            publish: e.target.checked,
                          })
                        }
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Publish
                      </label>
                    </div>
                    <button
                      onClick={updateBlog}
                      type="submit"
                      class="btn btn-primary w-100 mt-3"
                    >
                      Add Blog
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
