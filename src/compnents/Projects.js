import React from "react";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="container" id="project">
      <h2
        style={{
          marginBottom: "4rem",
          fontSize: "3rem",
          color: "white",
          paddingTop: "3rem",
        }}
        className="project_title"
      >
        PROJECTS
      </h2>

      <div className="container project_css ">
        <div class="container text-center">
          <div class="row row-cols-2">
            <div class="col projects_col">
              <span className="img1">
                <Link to="/allprojects/project1">
                  <img
                  className="project_img img-fluid"
                    src="https://i.ibb.co/KsV2WPs/C2-Dragon-Sicilian.png"
                    alt=""
                  />
                <span className="allprojects_img">Imperial Dice Chess</span>
                </Link>
              </span>
            </div>
            <div class="col projects_col">
              <span className="img1">
                <Link to="/allprojects/project2">
                  <img 
                  className="project_img img-fluid"
                    src="https://i.ibb.co/K75r6J3/DS-Dragon-Lavarys.png"
                    alt=""
                  />

                  <span className="allprojects_img">Vehicle Insurance Fraud Detection Model</span>
                </Link>
              </span>
            </div>
            <div class="col projects_col">
              <span className="img2">
                <Link to="/allprojects/project3">
                  <img
                  className="project_img img-fluid"
                    src="https://i.ibb.co/zHD06dn/SDE-Dragon-Penelope.png"
                    alt=""
                  />
                  <span className="allprojects_img ">Rebirth</span>
                </Link>
              </span>
            </div>
            <div class="col projects_col">
              <span className="img2">
                <Link to="/allprojects/project4">
                  <img
                  className="project_img img-fluid"
                    src="https://i.ibb.co/yVrBk38/IDE-Dragon-Waeve.png"
                    alt=""
                  />
                  <span className="allprojects_img">Blok-1, Music in 3D</span>
                </Link>
              </span>
            </div>
           
          </div>
        </div>
      </div>

      <Link to="/allprojects" className="view_css">
        View More...
      </Link>
    </div>
  );
};

export default Projects;
