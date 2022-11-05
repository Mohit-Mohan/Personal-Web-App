import React from "react";
import { Link } from "react-router-dom";
const Project3 = () => {
  return (
    <div className="project1">
      <div className="starting_img_text_white_bg">
        <h1>Rebirth</h1>

        <div class="row mob_css" style={{ padding: "50px" }}>
          <div class="col-6 ">
            <img
              className="img-fluid"
              src="https://i.ibb.co/zHD06dn/SDE-Dragon-Penelope.png"
              alt=""
            />
          </div>
          <div class="col-6 starting_text ">
            imagine/ Tiny and cute baby crystal dragon in blue and pink colours,
            warm summer moss forest, dynamic pose, Extreme detailed, intricate
            details, correct anatomy, magical light in the background, Unreal
            engine, Pixar. Octane render, wide angle, 8k, warm cinematic light,
            --ar 16:9
          </div>
        </div>
      </div>

      <div className="project3_img1" />
      <div className="video_project1" style={{ backgroundColor: "white" }}>
        <iframe
          width="500"
          height="400"
          src="https://www.youtube.com/embed/CwBdQV4lpf8"
        />
      </div>
      {/* <div className="img_css">
        <div>
      <img src="https://i.ibb.co/vZyFWZ2/User-Research.png"  alt="User-Research" border="0"/>

        </div>
      </div> */}
      <div className="brief_text_white_bg">
        A culmination of divergent and convergent thinking, and the breaking
        down of a pregnancy and ovulation kit with a view for sustainability and
        human-centred design, the Rebirth multipurpose testing kit is a
        sustainable alternative to traditional wasteful FMCG tests. It is
        convenient to use and eliminates the scope for thoughtless disposal due
        to the user’s emotional response to the result by simply allowing the
        flushing of the test strip. It reduces the overall carbon footprint by
        56% and creates a circular and unique system.
      </div>
      <div className="project3_img2" src="" alt="" />

      <div className="img_css ">
        <div>
          <img
            className="img-fluid"
            src="https://i.ibb.co/QFmvMg2/Ideation-Futures-Group-2-B-Poster.jpg"
            alt="Ideation-Futures-Group-2-B-Poster"
            border="0"
          />
        </div>
        {/* <div>

      <img src="https://i.ibb.co/nRdqQK4/Group-2-B-System-Solution-Poster.jpg" alt="Group-2-B-System-Solution-Poster" border="0"/>      </div>
       */}
        <div>
          <img
            className="img_center"
            src="https://i.ibb.co/NZ4Dq38/exploded.png"
            alt="exploded"
            border="0"
            style={{ width: "70%" }}
          />
        </div>

        <div className="brief_text_white_bg">
          Acknowledging the unique journeys of each user, a complete journey map
          with diverse entry points was created.
        </div>

        <div>
          <img
            className="img_centerimg-fluid img-fluid"
            src="https://i.ibb.co/tZ8yZ6x/user-journey.png"
            alt="user-journey"
            border="0"
            style={{ display: "block", marginLeft: "3%" }}
          />
        </div>

        <p className="project3_img3" />

        <div class="row">
          <div class="col-7 multi_phone" style={{ paddingRight: "0px" }}>
            <img
              className="img-fluid"
              src="https://i.ibb.co/Vg0j7vy/image.png"
              alt="image"
              border="0"
              style={{ marginBlock: "0rem" }}
            />
          </div>
          <div class="col-5 app_interface_text brief_text_white_bg">
            <div>
              With the service, the customers have access to online help through
              a website or app. It can aid the user journey towards a successful
              pregnancy, easing the experience through better understanding of
              each step of the purchase, collection / delivery, use and return.
            </div>
          </div>
        </div>

        <div>
          <img
            className="img-fluid"
            src="https://i.ibb.co/tPGS2RC/Production-and-sourcing.png"
            alt="Production-and-sourcing"
            border="0"
            style={{ marginBottom: "0rem" }}
          />
        </div>

        <div className="  iphone_pad">
          To source the materials & components from suppliers to manufacture the
          product, we researched several locations & found these spots in the
          UK. Using analytical material selection, the kit delays obsolescence
          and creates a detailed circular system.
        </div>
        <div>
          <img
            className="img-fluid"
            src="https://i.ibb.co/7K99yHW/system-journey-map.png"
            alt="system-journey-map"
            border="0"
            style={{ display: "block", marginLeft: "4%" }}
          />{" "}
        </div>

        <div className=" brief_text_white_bg">
          Two cases for the calculation of Embodied Energy and Carbon Footprint
          were taken. Taking best case scenario with recycling (& no discrete
          delivery), and with discrete delivery and minimum recyclability
          possible.
        </div>

        <div class="row justify-content-evenly  b1_b2 ">
          <div class="col-6">
            <img
              className="img-fluid_css"
              src="https://i.ibb.co/4sH8PFZ/b1.png"
              alt="b1"
              border="0"
              style={{ width: "auto" }}
            />
          </div>
          <div class="col-6">
            <img
              className="img-fluid_css"
              src="https://i.ibb.co/XjV3s2Y/b2.png"
              alt="b2"
              border="0"
              style={{ width: "auto", height: "654px" }}
            />
          </div>
        </div>
      </div>
      <Link to="/" className="homepage_btn ">
        Home Page
      </Link>
    </div>
  );
};

export default Project3;
