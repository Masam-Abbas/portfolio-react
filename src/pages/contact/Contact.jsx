import "./contact.css";
import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaLinkedin,
  FaGithub,
  FaPinterest
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

function Contact() {
  return (
    <>
      <section className="contact section">
        <h2 className="section__title">
          Get In <span>Touch</span>
        </h2>

        <div className="contact__container container grid">
          <div className="contact__data">
            <h3 className="contact__title">Don't be Shy</h3>

            <p className="contact__description">
              Feel free to get in touch with me. I am always open to discussion
              new projects, creative ideas or opportunities to be a part of your
              visions.
            </p>

            <div className="contact__info">
              <div className="info__item">
                <FaEnvelopeOpen className="info__icon" />
                <div>
                  <h4 className="info__title">Mail me :</h4>
                  <span className="info__desc">Masamabbas040@gmail.com</span>
                </div>
              </div>

              <div className="info__item">
                <FaPhoneSquareAlt className="info__icon" />
                <div>
                  <h4 className="info__title">Call me :</h4>
                  <span className="info__desc">+92-3466 111 944</span>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              <a className="contact__social-link" href="https://www.facebook.com/masam.bushoo/">
                <FaFacebookF />
              </a>

              <a className="contact__social-link" href="http://linkedin.com/in/masam-abbas/">
                <FaLinkedin />
              </a>

              <a className="contact__social-link" href="https://github.com/Masam-Abbas">
                <FaGithub />
              </a>

              <a className="contact__social-link" href="#">
                <FaPinterest />
              </a>
            </div>
          </div>

          <form className="contact__form">
            <div className="form__input-group">
              <div className="form__input-div">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form__control"
                ></input>
              </div>

              <div className="form__input-div">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form__control"
                ></input>
              </div>

              <div className="form__input-div">
                <input
                  type="text"
                  placeholder="Your Subject"
                  className="form__control"
                ></input>
              </div>
            </div>

            <div className="form__input-div">
              <textarea
                className="form__control textarea"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button className="button">
              Send Message
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
