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
        <p style={{ paddingTop: "2rem", fontSize: "1rem" }}>
          View Source Code on
          <a
            class="footer-link"
            target="_blank"
            href="https://github.com/sayeedmunees/mdme-frontend"
          >
            <span
              style={{
                paddingLeft: "0.5rem",
                textDecoration: "underline",
                textUnderlineOffset: "0.3rem",
                color: "rgba(145, 180, 255, 1)",
              }}
            >
              GitHub &#8599;
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
