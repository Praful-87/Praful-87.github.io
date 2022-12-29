import React, { useState } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="white header header-bg">
      <Link to="home">
        <h1 className="green highlighter">Praful</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <span className="green number">01.</span>&nbsp;
          <Link onClick={handleClick} to="home" smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <span className="green number">02.</span>&nbsp;
          <Link onClick={handleClick} to="about" smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li>
          <span className="green number">03.</span>&nbsp;
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={1000}
          >
            Projects
          </Link>
        </li>
        <li>
          <span className="green number">04.</span>&nbsp;
          <Link onClick={handleClick} to="skills" smooth={true} duration={1000}>
            Skills
          </Link>
        </li>
        <li>
          <span className="green number">05.</span>&nbsp;
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={1000}
          >
            Contacts
          </Link>
        </li>
      </ul>
      <div className="green hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes
            className="green menu-bar"
            size={20}
            style={{ color: "#fff" }}
          />
        ) : (
          <FaBars className="menu-bar" size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default React.memo(Navbar);


