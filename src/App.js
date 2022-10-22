import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Projects from "./compnents/Projects";
import Background from "./compnents/Background";
import About from "./compnents/About";
import Contact from "./compnents/Contact";
import AllProjects from "./compnents/AllProjects";
import Nav from "./compnents/Nav";
import IamSection from "./compnents/IamSection";
import MoreAbout from "./compnents/MoreAbout";
import Project1 from "./compnents/pages/Project1";
import Project2 from "./compnents/pages/Project2";
import Project3 from "./compnents/pages/Project3";
import Project4 from "./compnents/pages/Project4";

import "./AllProjects.css";
import Footer from "./compnents/Footer";
function App() {
  let count = 1;

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className=" container FirstSection_css">
                  <Nav />
                  <IamSection />
                </div>
                <Projects />
                <Background count={count} />
                <About />
                <Background count={count + 1} />
                <Contact />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route path="/allprojects" element={<AllProjects />} />
        </Routes>
        <Routes>
          <Route path="/allprojects/project1" element={<Project1 />} />
          <Route path="/allprojects/project2" element={<Project2 />} />
          <Route path="/allprojects/project3" element={<Project3 />} />
          <Route path="/allprojects/project4" element={<Project4 />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<MoreAbout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
