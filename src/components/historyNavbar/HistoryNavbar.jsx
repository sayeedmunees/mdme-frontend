import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./historyNavbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="mdme__navbar">
        <div className="mdme__navbar-logo logo-text">
          <Link to={"/"}>
            <h2>.mdme</h2>
          </Link>
        </div>
        <div className="mdme__navbar-links">
          <Link to={"/"}>
            <a href="#">Home</a>
          </Link>
          <Link to={"/editor"}>
            <a href="#editor">Editor</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
