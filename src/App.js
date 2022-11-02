import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./index.css";
import Home from "./Routes/Home";
import Projects from "./Routes/Projects";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
