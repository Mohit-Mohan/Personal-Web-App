import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {


  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg nav_css ">
          <div class="container-fluid">
            <span className="name">MOHIT MOHAN </span>
            <div
              class="collapse navbar-collapse"
              id="navbarNav"
              className="navbarNav_css"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/allprojects" class="nav-link " aria-current="page">
                    PROJECTS
                  </Link>
                  {/* <a class="nav-link " aria-current="page" href="/allprojects">
                    Projects
                  </a> */}
                </li>
                <li class="nav-item">
                  <Link to="/about" class="nav-link " aria-current="page">
                    ABOUT
                  </Link>

                  {/* <a class="nav-link" aria-current="page" href="/about">
                    About
                  </a> */}
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
      </div>
    </>
  );
};

export default Nav;
