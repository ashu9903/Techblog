import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./component/NavigationBar";
import {
  Home,
  Details,
  Login,
  Register,
  Account,
  Profile,
  AddBlog,
  Dashboard,
  PageNotFound,
} from "./pages";
import axios from "axios";
import Loginonly from "./pages/Loginonly";
export const BlogContext = createContext();
export const AdminContext = createContext();

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const getAllBlogs = async ({ publish = false }) => {
    let result;
    if (publish) {
      const { data } = await axios.get("/blogs");
      result = data.filter((item) => item.publish === true);
    } else {
      const { data } = await axios.get("/blogs");
      result = data;
    }
    return result;
  };

  const [users, setusers] = useState([]);
  const getAllUsers = async (e) => {
    const { data } = await axios.get("/users");
    setusers(data);
  };

  const localData = JSON.parse(localStorage.getItem("localLogin"));
  const [login, setlogin] = useState(localData);

  return (
    <>
      <BrowserRouter>
        <BlogContext.Provider
          value={{
            getAllBlogs,
            blogs,
            getAllUsers,
            users,
            login,
            setlogin,
            setBlogs,
          }}
        >
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog-details/:blogId" element={<Details />} />
            <Route
              path="/user/account"
              element={<Loginonly element={<Account />} />}
            />
            <Route
              path="/user/profile"
              element={<Loginonly element={<Profile />} />}
            />
            <Route
              path="/user/add-blog"
              element={<Loginonly element={<AddBlog />} />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BlogContext.Provider>

        <AdminContext.Provider value={{ getAllUsers, users }}>
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Routes>
        </AdminContext.Provider>
      </BrowserRouter>
    </>
  );
}
