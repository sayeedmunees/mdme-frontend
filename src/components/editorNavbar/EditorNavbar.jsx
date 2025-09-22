import React, { useEffect, useState } from "react";
import "./editorNavbar.css";
import { FaRegCopy } from "react-icons/fa";
import { FiSave } from "react-icons/fi";
import { Link } from "react-router-dom";
import { addMarkdownAPI } from "../../services/allAPI";

const EditorNavbar = ({ mdStr, title }) => {
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

  const handleSave = async () => {
    const currentDate = new Date();

    // console.log(title);
    // console.log(currentDate);
    // console.log(mdStr);

    const mdData = {
      title: title, // Use current title prop
      date: currentDate,
      mdData: mdStr, // Use current mdStr prop
    };

    // console.log("Saving mdData:", mdData);

    try {
      const result = await addMarkdownAPI(mdData); // Remove array wrapper
      // console.log("Save result:", result);
    } catch (err) {
      console.log("Error", err);
    }
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
