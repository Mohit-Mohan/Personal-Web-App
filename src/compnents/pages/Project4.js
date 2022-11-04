import React from "react";
import { Link } from "react-router-dom";
const Project4 = () => {
  return (
    <div className="project1">


      <div className="starting_img_text_white_bg">
        <h1>Blok 1, Music in 3D</h1>
        
        <div class="row mob_css" style={{ padding: "50px" }}>
          <div class="col-6 ">
            <img  className="img-fluid" src="https://i.ibb.co/yVrBk38/IDE-Dragon-Waeve.png" alt="" />
          </div>
          <div class="col-6 starting_text ">
          imagine/ Magical cute dragon in sleek white colours, vibing to music, with music notes on purple, orange, pink coloured blocks, dynamic pose, Extreme detailed, intricate details, correct anatomy, magical light in the background, Unreal engine, Pixar. Octane render, wide angle, 8k, cinematic light, --ar 16:9
          </div>
        </div>
      </div>

      <div className="project4_img1" />
      <div className="video_project1">
        <iframe
          width="500"
          height="400"
          src="https://www.youtube.com/embed/iIGbqy447ZQ"
        ></iframe>
      </div>
      <div className="brief_text_white_bg">
      The journey of the creation of Blok-1 started with a detailed research conducted on people with learning differences specifically dyslexia, followed by an analysis of the challenges faced by them on a regular basis. Understanding the difficulties, Blok-1 enables them to simplify music theory through visualisation by converting it into 3D blocks. It also equips them to create their own music using various beats and instruments of their choice.
      Tech Stack - Hardware: Electronics, Multiplexers, Resistor Blocks, Block Design. Software: MIDI Compiler, MIDI G-Code, Max MSP, Arduino, RaspberryPi, App Design.
      For More Information, check out{" "}
            <a
              href="https://github.com/Mohit-Mohan/Blok-1-Real-Time-Music-Processing"
              target="blank"
            >
              GitHub
            </a>
      </div>
     
     <div className="project4_img2"></div>
   
        
        <div className=" img_css">

    <div>
    <img src="https://i.ibb.co/ZW6CPxX/Main-image.png" alt="Main-image" border="0"></img>
    </div>
    <div className="text_center" style={{marginTop:"5%"}} >Blok-1 redefines conventional music notation and creation. It enables each user to make their own beats and music while grasping a more intuitive and deeper understanding of traditional sheet music notation</div>
      
      <div>
      <img src="https://i.ibb.co/YWsTX97/individual-blok.png" alt="individual-blok" border="0" style={{marginLeft:"12%",display:"block","marginBlock":"0rem"}} ></img>
      </div>

    <div className="text_center">Each blok on the conductive grid contains a unique resistance value which allows it to produce distinct sounds based on user input and placement.</div>

      <div>
      <img src="https://i.ibb.co/ysKwmbB/Blok-breakdown.png" alt="Blok-breakdown" border="0" style={{display:"block",marginLeft:"19%",marginTop:"-8%"}} />
      </div>
      <div className="text_center">The Blok - 1 application aims to create an inclusive music community of not just skilled musicians but also those who are alienated by society because of their subtle learning differences. It provides everyone a platform to learn and create new beats as well as share them.</div>
      <div >

      <img src="https://i.ibb.co/qrHZDvd/App-interface.png" alt="App-interface" border="0" style={{margin:"block",marginLeft:"17%"}} ></img>
      </div>
      <div className="project4_img3"></div>
     
      <div className="text_center" style={{marginTop:"3rem"}}>The product was made in compliance with the industry standards of Design for Manufacturing and Assembly (DFMA). A fully functional 6-layer PCB was also designed for all electronic components based on standard industry practices. An exploded view of each product component is shown below.</div>

    
      <div>
    <img src="https://i.ibb.co/j41RRPB/Product-explosion.png" alt="Product-explosion" border="0"  style={{display:"block",marginLeft:"22%",marginBlock:"3rem",width:"70%"}} />
    </div>

    <div className="text_center">The comprehensive digital schematic shown below was translated into the 6-layer PCB. The PCB contains an Arduino mega capable of processing real-time music, using nodes coded on the language MAX MSP, which then translates it into each block on the product’s grid further reading the user’s placed musical blok.</div>

    <div>
    <img src="https://i.ibb.co/LC9pbvt/pcb-schematic.png" alt="pcb-schematic" border="0"  />
    </div>
    <div>
    <img src="https://i.ibb.co/MBKy3Z0/maxmsp.png" alt="maxmsp" border="0" style={{width:"65%",marginTop:"-24%"}}/>
    </div>

    <div>
    <img src="https://i.ibb.co/k51mFVZ/pcb-actual.png" alt="pcb-actual" border="0" style={{width:"65%",marginTop:"-20%"}} />
    </div>

    

    </div>

    <Link to="/" className="homepage_btn">
          Home Page
        </Link>
    </div>
  );
};

export default Project4;
