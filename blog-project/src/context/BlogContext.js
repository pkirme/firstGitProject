import React, { createContext, useState } from "react";
import axios from "axios";

const BlogContext = createContext();

export const BlogContextProvider = (props) => {
  const [blogs, setBlogs] = useState([]);
  const url = `https://crudcrud.com/api/10019ff1888448ad9eeb323e1a4eaa7e/Blog`;

  const addBlogHandler = async (blog) => {
    try {
      await axios.post(url, blog);
      const response = await axios.get(url);
      const data = response.data;

      setBlogs(data);
    } catch (error) {
      console.error("Error handling the product:", error);
    }
  };

  const updateBlogHandler = async (blog) => {
    const response = await axios.get(url);
    const data = response.data;
    const existingProductIndex = data.findIndex((item) => item.id === blog.id);

    console.log(existingProductIndex);

    if (existingProductIndex !== -1) {
      // Product exists, update the product with a PUT request
      const ID = data[existingProductIndex]._id;
      console.log(ID);
      const updatedProduct = {
        id: blog.id,
        imageUrl: blog.imageUrl,
        title: blog.title,
        description: blog.description,
      };
      await axios.put(`${url}/${ID}`, updatedProduct);
      const response = await axios.get(url);
      const getData = response.data;

      setBlogs(getData);
    } else {
      console.log("Item not found!"); // Handle the case when the item is not found
    }
  };

  const removeBlogHandler = (id) => {
    const updatedList = blogs.filter((item) => item.id !== id);
    setBlogs(updatedList);
  };

  const blogContext = {
    blogList: blogs,
    setBlogs: setBlogs,
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
