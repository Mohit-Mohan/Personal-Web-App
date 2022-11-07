import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg nav_css ">
        <div class="container-fluid">
          <span class="navbar-brand name col-md-6" to="/">
            MOHIT MOHAN
          </span>

          {/* <span className="name">MOHIT MOHAN </span> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* <div
              class="collapse navbar-collapse"
              id="navbarNav"
              className="navbarNav_css"
            > */}
          <div class="collapse navbar-collapse col-md-6" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <ul class="navbar-nav"> */}
              <li class="nav-item">
                <Link to="/allprojects" class="nav-link " aria-current="page">
                  PROJECTS
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link " aria-current="page">
                  ABOUT
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
