import "./footer.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 Housing society</p>
              <p>Maharashtra</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                sizsize={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              +917057311197
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                sizsize={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              prafujadaho87@gmial.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Abut the company</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            autem rerum expedita, ad consequuntur libero quibusdam excepturi
            doloribus quo eligendi quia aspernatur maxime iusto.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
