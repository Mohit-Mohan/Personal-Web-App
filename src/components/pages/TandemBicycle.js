import React from "react";
import { Link } from "react-router-dom";
import FEA2 from "../../media/FEA2.png";

const TandemBicycle = () => {
  return (
    <div className="project1">
      <div className="starting_img_text_white_bg">
        <h1>FEA of a Tandem Bicycle Frame</h1>

        <div class="row mob_css" style={{ padding: "50px" }}>
          <div class="col-6 ">
            <img
              className="img-fluid"
              src="https://i.ibb.co/kyTsp7Y/FEA-Dragon-Fluffy.png"
              alt=""
            />
          </div>
          <div class="col-6 starting_text ">
            /imagine A Double headed dragon with mesh like detailed scales, one
            body, visually stunning, gradient mesh like colours, intricate,
            colour graded, 8k --ar 16:9
          </div>
        </div>
      </div>

      <div className="tb_img1" />
      <div className="brief_text_white_bg">
        This project aims to navigate through the design process of a
        lightweight and adult-friendly tandem bicycle frame with two seats using
        the finite element method on Solidworks 2021. It also details the
        processes of mesh refinement, model sanity checks, determination of
        fatigue life, as well as the improvement of their natural frequencies
        using FEA, which were undertaken for the successful completion of the
        project.
      </div>
      <div className="tb_img2" src="" alt="" />

      <div className="img_css ">
        <div>
          <img
            className="img-fluid"
            src="https://i.ibb.co/gvQrg14/FEA1.png"
            border="0"
          />
        </div>

        <div>
          <img src={FEA2} alt="hello" srcset="" />
          {/* <img
            className="img-fluid"
           
            src="https://i.ibb.co/KrcXLhz/FEA2.png"
            
            border="0"
          /> */}
        </div>

        <div>
          <img
            className=" img-fluid"
            src="https://i.ibb.co/840c3Jg/FEA3.png"
            border="0"
            // style={{ display: "block", marginLeft: "3%" }}
          />
        </div>
      </div>
      <Link to="/" className="homepage_btn ">
        Home Page
      </Link>
    </div>
  );
};

export default TandemBicycle;
