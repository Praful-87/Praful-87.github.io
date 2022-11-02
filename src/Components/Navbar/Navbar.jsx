import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  console.log("nav renderd");
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link onClick={handleClick} to="home" smooth={true} duration={1000}>
            Home
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
          <Link onClick={handleClick} to="about" smooth={true} duration={1000}>
            About
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
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default React.memo(Navbar);
