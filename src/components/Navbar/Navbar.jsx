import React from "react";
import "./Navbar.css";
import logo from "../../assets/bglogo BW.png";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Fourm</li>
        <li>Blog</li>
        <li>Useful Links</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
