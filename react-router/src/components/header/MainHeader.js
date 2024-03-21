import React from "react";
import { NavLink } from "react-router-dom";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <header>
      <nav className="nav">
        <ul className="ul">
          <li>
            <NavLink to="/welcome" className="link">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="link">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/product-details" className="link">
              Details
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
