import React, { useState } from "react";
import Typewriter from "typewriter-effect/dist/core";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="white header header-bg">
      <Link onClick={handleClick} to="home" smooth={true} duration={1000}>
        <h1 className="hightlight">
          <span className="green">P</span>raful <span className="green">J</span>
          adhao{" "}
        </h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link onClick={handleClick} to="home" smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="about" smooth={true} duration={1000}>
            About
          </Link>
        </li>
        <li>
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
          <Link onClick={handleClick} to="skills" smooth={true} duration={1000}>
            Skills
          </Link>
        </li>
        <li>
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
