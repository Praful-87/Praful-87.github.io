import "./contact.css";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import React from "react";

const Contact = () => {
  return (
    <>
      <div id="contact" className="layout contact-container">
      <h1 className="title">contact me</h1>
        <div className="c-wrapper">
          <div className="contact-image">
            <img
              src="https://ecomexpress.in/wp-content/uploads/2021/02/contact-us-banner-img.png"
              alt=""
            />
          </div>
          <div className="contact-form">
            <div className="icon-grid">
              <a href="https://github.com/Praful-87" target="_blank">
                <div className="box">
                  <FaGithub className="c-icons" />
                  <h3 className="white">Github</h3>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/praful-jadhao/"
                target="_blank"
              >
                <div className="box">
                  <FaLinkedin className="c-icons" />
                  <h3 className="white">LinkedIn</h3>
                </div>
              </a>
              <a
                href="https://mail.google.com/mail/prafuljadhao87@gmail.com"
                target="_blank"
              >
                <div className="box">
                  <SiGmail className="c-icons" />
                  <h3 className="white">Gmail</h3>
                </div>
              </a>
              <a href="https://github.com/Praful-87" target="_blank">
                <div className="box">
                  <FaPhoneAlt className="c-icons" />
                  <h3 className="white">7075311197</h3>
                </div>
              </a>
            </div>
            <div className="firebase-form">
              <input type="text" placeholder="Full Name" />
              <br />
              <input type="text" placeholder="Full Name" />
              <br />
              <textarea
                placeholder="Type Your Messege"
                name=""
                id=""
                cols="30"
                rows="5"
              ></textarea>
              <button className="send-button">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
