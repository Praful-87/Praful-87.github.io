import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Projects from "./Routes/Projects";
import About from "./Routes/About";
import Contacts from "./Routes/Contact";
import Navbar from "./Components/Navbar";
import "./index.css";
import "./index.css";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
