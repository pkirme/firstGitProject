import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Bootstrap configuration.
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BlogContextProvider } from "./context/BlogContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BlogContextProvider>
    <App />
  </BlogContextProvider>
);
