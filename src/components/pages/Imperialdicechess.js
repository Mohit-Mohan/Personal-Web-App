import React from "react";
import { Link } from "react-router-dom";

const Imperialdicechess = () => {
  return (
    <div className="project1">
      <div className="starting_img_text">
        <h1>Imperial Dice Chess</h1>
        
        <div class="row mob_css " style={{ padding: "50px" }}>
          <div class="col-6 ">
            <img className="img-fluid"  src="https://i.ibb.co/KsV2WPs/C2-Dragon-Sicilian.png" alt="" />
          </div>
          <div class="col-6 starting_text ">
          imagine/ Dragons on a chess board, game of thrones style, creative, regal, magical, cinematic and volumetric lighting, 8k, hyper-realistic and detailed, <br /> --ar 16:9
          </div>
        </div>
      </div>

      <div className="project1_img1" />
      <div className="video_project1 " style={{backgroundColor:"black",paddingTop:"5%"}}>
        <iframe 
        
          width="500"
          height="400"
          src="https://www.youtube.com/embed/msdfXwnIDyc"
        />
      </div>

      <div className="brief_text">
        Adding the flavors of luck and mystery to an otherwise majorly strategic
        chess game, I introduced the element of dice and created a two-player
        dice chess web app. Governed by the throw of a dice and its outcomes,
        the app uses UX/UI elements to make it fun and visually appealing. I
        added a design theme by adding pictures of my cohort of professors to
        the board. The app is a product of intricate designing, iterative
        debugging, and in-depth coding with a focus on functional and
        object-oriented programming. Tech Stack - Frontend: JavaScript, CSS, HTML, JQuery. 
        Backend: Node.js, Express.js, EJS

      </div>
      <div className="project_img2" src="" alt="" />
      <div class="row project_images">
        <div class="col-4">
          <img
            src="https://i.ibb.co/RzYmfKW/Screenshot-2022-10-17-173251.jpg"
            alt="Screenshot-2022-10-17-173251"
            border="0"
          />
        </div>
        <div class="col-4">
          <img src="https://i.ibb.co/b2cV3c6/ss1.jpg" alt="ss1" border="0" />
        </div>
        <div class="col-4">
          <img   src="https://i.ibb.co/QQPjxZd/ss2.jpg" alt="ss2" border="0" />
        </div>
      </div>
      <div className="text_github">
        <div className="container brief_text ">
          The web-app I chose to create was a two-player chess app with 3 dice
          elements in order to add a degree of luck to the strategy game, for
          people who just want to play casually. However, I made the dice
          feature optional in the sense that you do not have to use it if you do
          not want to. I also wanted to give it a Design Engineering theme,
          allowing me to showcase different UX/UI elements and make the game
          more fun and authentic. I start the game off on the home webpage
          allowing users to read up on the new rules and select their player
          names, which gets stored on the main chess page as well through
          queries. This then leads the user to the main page where the game
          begins. Users can toggle between themes and even start a new game at
          any instance via simple user interface. The Dice Chess game mode has
          all basic rules of chess as well as some niche rules, with further
          implementation possible through existing code but not necessary under
          the current game theme.{" "}
            For More Information, check out{" "}
            <a
              href="https://github.com/Mohit-Mohan/Imperial-Dice-Chess-Web-App"
              target="blank"
            >
              GitHub
            </a>
          </div>
        </div>
        <div style={{backgroundColor:"black",color:"white"}}>
        <Link to="/" className="homepage_btn_other">
          Home Page
        </Link>
        </div>
      </div>
    
  );
};

export default Imperialdicechess;
