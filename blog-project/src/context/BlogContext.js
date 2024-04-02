import React, { createContext, useState } from "react";

const BlogContext = createContext();

export const BlogContextProvider = (props) => {
  const [blogs, setBlogs] = useState([]);

  const addBlogHandler = (blog) => {
    setBlogs((prev) => [...prev, blog]);
    console.log(blogs);
  };

  const updateBlogHandler = (blog) => {};

  const removeBlogHandler = (id) => {
    const updatedList = blogs.filter((item) => item.id !== id);
    setBlogs(updatedList);
  };

  const blogContext = {
    blogList: blogs,
    addBlog: addBlogHandler,
    updateBlog: updateBlogHandler,
    removeBlog: removeBlogHandler,
  };
  return (
    <BlogContext.Provider value={blogContext}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
