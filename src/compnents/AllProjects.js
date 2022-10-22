import React from "react";
import { Link } from "react-router-dom";

const AllProjects = () => {
  return (
    <div className="container AllProjects" id="project">
      <h2
        style={{
          marginBottom: "4rem",
          fontSize: "3rem",
          color: "white",
          paddingTop: "3rem",
        }}
      >
        Projects
      </h2>

      <div className="container project_css ">
        <div class="container text-center">
          <div class="row row-cols-2">
            <div class="col projects_col">
              <span className="img1">
                <Link to="/allprojects/project1">
                  <img
                    src="https://i.ibb.co/KsV2WPs/C2-Dragon-Sicilian.png"
                    alt=""
                  />
                </Link>
                <span className="allprojects_img1"style={{left:"21%"}}>Imperial Dice Chess</span>
              </span>
            </div>
            <div class="col projects_col">
              <span className="img1">
                <Link to="/allprojects/project2">
                  <img
                    src="https://i.ibb.co/K75r6J3/DS-Dragon-Lavarys.png"
                    alt=""
                  />

                  <span className="allprojects_img1"style={{right: "11%"}}>Vehicle Insurance Fraud Detection Model</span>
                </Link>
              </span>
            </div>
            <div class="col projects_col">
              <span className="img2">
                <Link to="/allprojects/project3">
                  <img
                    src="https://i.ibb.co/zHD06dn/SDE-Dragon-Penelope.png"
                    alt=""
                  />
                  <span className="allprojects_img"style={{left:"26%"}}>Rebirth</span>
                </Link>
              </span>
            </div>
            <div class="col projects_col">
              <span className="img2">
                <Link to="/allprojects/project4">
                  <img
                    src="https://i.ibb.co/yVrBk38/IDE-Dragon-Waeve.png"
                    alt=""
                  />
                  <span className="allprojects_img"style={{right:"20%"}}>Blok-1, Music in 3D</span>
                </Link>
              </span>
            </div>
            <div class="col">
              <span className="img3">
                <img
                  src="https://i.ibb.co/PDy92vT/PMAT-Dragon-Drall-E.png"
                  alt=""
                />
                <span className="allprojects_img" style={{left:"22%"}}>Coming Soon...</span>
              </span>
            </div>
            <div class="col">
              <span className="img3">
                <img
                  src="https://i.ibb.co/wMY1Yk6/TF-Dragon-Batter.png"
                  alt=""
                />
                <span className="allprojects_img" style={{right:"22%"}}>Coming Soon...</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div >

      <Link to="/" className="homepage_btn_other" style={{paddingTop:"2rempx"}}>
        Home Page
      </Link>
      </div>
    </div>
  );
};

export default AllProjects;
