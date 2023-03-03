import "./contact.css";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    // service_uih5fql
    //My Default Template
    emailjs.sendForm(
      "service_uih5fql",
      "template_eqd2vyq",
      e.target,
      "uXnFlmRco6rVAZm0V"
    );
    alert("Thank You for contacting me");
    e.target.reset();
  }
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
            <form className="firebase-form" onSubmit={sendEmail}>
              <input name="from_name" type="text" placeholder="Full Name" />
              <br />
              <input name="from_email" type="email" placeholder="Email" />
              <br />
              <textarea
                placeholder="Type Your Messege"
                name="message"
                cols="30"
                rows="5"
              ></textarea>
              <button type="submit" className="send-button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
