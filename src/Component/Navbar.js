import React from "react";
import logo from "../Asset/logo.png";
import "../App.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light p-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" width="100" height="50"></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <i className="fa-solid fa-house mx-2"></i>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/allusers">
                  <i className="fa-solid fa-users mx-2"></i>
                  All Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addnew">
                  <i className="fa-solid fa-user-plus mx-2"></i>
                  Add New
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
