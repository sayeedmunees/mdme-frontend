import React from "react";
import ReactMarkdown from "react-markdown";
import "./preview.css";


const Preview = ({ mdStr }) => {
  return (
    <div className="mdme__preview">
      <div className="mdme__preview-header">
        <h3>Preview</h3>
      </div>
      <div className="mdme__preview-content">
        {mdStr ? (
          <ReactMarkdown>{mdStr}</ReactMarkdown>
        ) : (
          <div className="mdme__preview-empty">
            <p>Start typing in the editor to see your preview here!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;
