import React from "react";
import "./features.css";
import { editorImg } from "./imports";

const Features = () => {
  return (
    <div className="mdme__features section__padding" id="features">
      <div className="mdme__features-header">
        <h2>
          Why Choose <span>mdme</span> <span id="question">?</span>
        </h2>
        <p>Everything you need for effortless markdown editing</p>
      </div>

      <div className="mdme__features-container">
        <div className="mdme__features-container_contents">
          <ul>
            <li>Live Preview</li>
            <p>See your markdown render in real-time as you type.</p>
            <li>Clean Interface</li>
            <p>
              Distraction-free writing with minimal design focused on your
              content.
            </p>
            <li>Responsive Design</li>
            <p>
              Write anywhere on desktop, tablet, or mobile devices seamlessly.
            </p>
            <li>AI Assistant</li>
            <p>Smart writing suggestions and improvements (coming soon).</p>
          </ul>
        </div>
        <div className="mdme__features-container_image">
          <img src={editorImg} alt="editor" />
        </div>
      </div>
    </div>
  );
};

export default Features;
