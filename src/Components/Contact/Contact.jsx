import "./contact.css";
import {
  FaAddressBook,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import React from "react";

const Contact = () => {
  return (
    <>
      <div id="contact" className="layout contact-container">
        <h1 className="title">contact me</h1>
        <p className="Contatct-Information">Contatct Information</p>
        <div className="c-wrapper">
          <div className="box">
            <div className="icon-box">
              <FaPhone className="c-icons" />
            </div>
            <div className="info-box">
              <p>Contact on phone</p>
              <p>+917057311197</p>
            </div>
          </div>
          <div className="box">
            <div className="icon-box">
              <FaMailBulk className="c-icons" />
            </div>
            <div className="info-box">
              <p>Contact on email</p>
              <p>prafuljadhao@gmail.com</p>
            </div>
          </div>
          <div className="box">
            <div className="icon-box">
              <FaLocationArrow className="c-icons" />
            </div>
            <div className="info-box">
              <p>Contact on address</p>
              <p>Pusad, maharashtra 445215</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
