import React from "react";
import "./Hero.css";
import arrow_right from "../../assets/arrow_right.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>WELCOME TO Desi Grand Rapids Hub</h1>
        <h2>🚧 Website Under Construction 🚧</h2>
        <p>
          Hello and welcome! 👋 We are busy building something exciting for our
          community—a space where connections, rides, and resources come
          together effortlessly. 🚗✨ Stay tuned! Our new website is coming soon
          to make your experience even better. Thank you for your patience and
          support. See you on the road soon!
        </p>
        <button className="btn">
          Learn more <img src={arrow_right} alt=""></img>
        </button>
      </div>
    </div>
  );
};

export default Hero;
