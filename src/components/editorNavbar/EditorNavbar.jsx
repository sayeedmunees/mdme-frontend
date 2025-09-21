import React, { useState } from "react";
import "./editorNavbar.css";
import { FaRegCopy } from "react-icons/fa";
import { FiSave } from "react-icons/fi";
import { Link } from "react-router-dom";

const EditorNavbar = ({ mdStr }) => {
  const [copyStatus, setCopyStatus] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(mdStr);
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus(""), 2000);
    } catch (err) {
      setCopyStatus("Failed");
      setTimeout(() => setCopyStatus(""), 2000);
    }
  };

  const handleSave = () => {
    const currentDateTime = new Date(); // ✅ No import needed
    const formattedDateTime = currentDateTime
      .toISOString()
      .replace(/T/, "_")
      .replace(/:/g, "-")
      .split(".")[0];

    const blob = new Blob([mdStr], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `document_${formattedDateTime}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <nav className="editor-navbar">
      <div className="navbar-logo logo-text">
        <Link to="/">
          <h2>.mdme</h2>
        </Link>
      </div>

      <div className="navbar-actions">
        <Link to={"/history"}>
          <a href="">History</a>
        </Link>
        <button className="navbar-btn" onClick={handleCopy} disabled={!mdStr}>
          <FaRegCopy /> Copy
        </button>
        <button className="navbar-btn" onClick={handleSave} disabled={!mdStr}>
          <FiSave /> Save
        </button>
        {copyStatus && <span className="status">{copyStatus}</span>}
      </div>
    </nav>
  );
};

export default EditorNavbar;
