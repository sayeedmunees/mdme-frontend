import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="mdme__footer section__padding" id="knowmore">
      <div className="mdme__footer-links">
        <div className="mdme__footer-links_logo logo-text">
          <h2>.mdme</h2>
          <p>
            Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="mdme__footer-links_div hover">
          <h4>Links</h4>
          <a>Overons</a>
          <a>Social Media</a>
          <a>Counters</a>
          <a>Contact</a>
        </div>
        <div className="mdme__footer-links_div hover">
          <h4>Company</h4>
          <a>Terms & Conditions</a>
          <a>Privacy Policy</a>
          <a>Contact</a>
        </div>
        <div className="mdme__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="mdme__footer-copyright">
        <p>© 2025 mdme. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
