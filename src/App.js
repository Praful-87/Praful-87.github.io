import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";
import MySkills from "./Components/MySkills/MySkills";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Projects/Project";
import "./index.css";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <MySkills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
