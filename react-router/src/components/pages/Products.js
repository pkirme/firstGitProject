import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Products = () => {
  return (
    <section>
      <h1>This is product page.</h1>
      <ul>
        <li>
          <NavLink to="/products/p1">product1</NavLink>
        </li>
        <li>
          <NavLink to="/products/p2">product2</NavLink>
        </li>
        <li>
          <NavLink to="/products/p3">product3</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Products;
