import "./home.css";
import React from "react";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <section className="home section grid">
      <img src={Profile} alt="home pic" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Masam Abbas. </span> Web Devloper
          </h1>
          <p className="home__desc">
           I'm A Professional Developer Having Over 5 Year Of Web Page Design And Website Development Experience. My Creations Are Guaranteed On Innovation And Modern Techniques...
          </p>

          <Link to="./about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
}

export default Home;
