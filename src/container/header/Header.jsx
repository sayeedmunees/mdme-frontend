import React from "react";
import "./header.css";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="mdme__header section__padding">
        <div className="mdme__header-heading">
          <h4>Once you try,</h4>
          <h1>
            <span>.mdme</span>
          </h1>
          <h1 id="mdme__header-heading_h1">
            there's no going back <br /> — and why would you?"
          </h1>
          <h2>
            <span>M</span>ark <span>D</span>own <span>M</span>ade <span>E</span>
            asy
          </h2>
        </div>
        <div className="mdme__header-content">
          <p>
            Ready to revolutionize your <br /> markdown workflow?
          </p>
          <Link to={"/editor"}>
            <button>Get Started &#8599;</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
