import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="images/logoo.jpg" width="45" height="40" className="m-2"  alt="logo" />
          <span >RayZ</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <NavLink
                className="nav-link"
                activeClassName="active"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/our-courses"
              >
                Our Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
