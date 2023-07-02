import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../App";

export default function Home() {
  const { blogs, setBlogs, getAllBlogs } = useContext(BlogContext);
  const x = async () => {
    const data = await getAllBlogs({ publish: true });
    console.log(data);
    setBlogs(data);
  };
  useEffect((e) => {
    x();
  }, []);
  return (
    <>
      {/* {JSON.stringify(blogs)} */}
      <div className="container">
        {/* create blogs */}
        <div className="row">
          {blogs.map((item) => (
            <div className="col-sm-3" key={item.title}>
              <div className="card">
                <img src={item.image} className="card-img-top" alt="" />
                <div className="card-body">
                  <p className="text-muted text-end my-3 pe-4">Read Time</p>
                  <h1>{item.title}</h1>
                  <Link to={`/blog-details/${item.id}`}>Read more</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
