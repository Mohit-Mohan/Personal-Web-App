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
        <div className="container text-center">
          <div className="row row-cols-2">
            <div className="col projects_col">
              <span className="img1">
                <Link to="/allprojects/imperialdicechess">
                  <img
                  className="project_img img-fluid"
                    src="https://i.ibb.co/KsV2WPs/C2-Dragon-Sicilian.png"
                    alt=""
                  />
                <span className="allprojects_img">Imperial Dice Chess</span>
                </Link>
              </span>
            </div>
            <div className="col projects_col">
              <span className="img1">
                <Link to="/allprojects/VIFDM">
                  <img 
                  className="project_img img-fluid"
                    src="https://i.ibb.co/K75r6J3/DS-Dragon-Lavarys.png"
                    alt=""
                  />

                  <span className="allprojects_img">Vehicle Insurance Fraud Detection Model</span>
                </Link>
              </span>
            </div>
            <div className="col projects_col">
              <span className="img2">
                <Link to="/allprojects/Rebirth">
                  <img
                  className="project_img img-fluid"
                    src="https://i.ibb.co/zHD06dn/SDE-Dragon-Penelope.png"
                    alt=""
                  />
                  <span className="allprojects_img ">Rebirth</span>
                </Link>
              </span>
            </div>
            <div className="col projects_col">
              <span className="img2">
                <Link to="/allprojects/Blok1">
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
