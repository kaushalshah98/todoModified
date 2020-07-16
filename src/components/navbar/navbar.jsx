import React from "react";
import "./navbar.scss";
const NavBar = ({ totalItems }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {totalItems}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
