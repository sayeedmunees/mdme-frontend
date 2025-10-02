import React, { useState } from "react";
import "./editorNavbar.css";
import { FaRegCopy } from "react-icons/fa";
import { FiSave } from "react-icons/fi";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { addMarkdownAPI, editMarkdownAPI } from "../../services/allAPI";

const EditorNavbar = ({
  mdStr,
  title,
  updateMd,
  setUpdateMd,
  mdId,
  historyEdit,
  setHistoryEdit,
}) => {
  const [copyStatus, setCopyStatus] = useState("");
  const navigate = useNavigate();
  const [mdUpdateId, setMdUpdateId] = useState(mdId);

  const showStatus = (message, duration = 2000) => {
    setCopyStatus(message);
    setTimeout(() => setCopyStatus(""), duration);
  };

  const getCurrentDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(mdStr);
      showStatus("Copied!");
    } catch (err) {
      showStatus("Copy Failed");
    }
  };

  const handleSave = async () => {
    const mdData = {
      title,
      date: getCurrentDate(),
      mdData: mdStr,
    };

    try {
      const result = await addMarkdownAPI(mdData);
      setUpdateMd(true);
      showStatus("Saved!");
      setMdUpdateId(result.data.id);
      // console.log(result.data.id);
    } catch (err) {
      console.error("Save error:", err);
      showStatus("Save Failed");
    }
  };

  const handleUpdate = async () => {
    const mdData = {
      title,
      date: getCurrentDate(),
      mdData: mdStr,
    };

    try {
      await editMarkdownAPI(mdUpdateId, mdData);
      showStatus("Updated!");

      if (historyEdit) {
        setHistoryEdit(false);
        setTimeout(() => navigate("/history"), 1000);
      }
    } catch (err) {
      console.error("Update error:", err);
      showStatus("Update Failed");
    }
  };

  return (
    <nav className="editor__navbar">
      <div className="editor__navbar-logo logo-text">
        <Link to="/">
          <h2>.mdme</h2>
        </Link>
      </div>

      <div className="editor__navbar-actions">
        <Link to="/history">
          <span>History</span>
        </Link>
        <>
          <button
            className="editor__navbar-actions_btn"
            onClick={handleCopy}
            disabled={!mdStr}
          >
            <FaRegCopy /> Copy
          </button>

          {updateMd ? (
            <button
              className="editor__navbar-actions_btn"
              onClick={handleUpdate}
              // disabled={!mdStr || !mdId}
            >
              <MdOutlineSystemUpdateAlt /> Update
            </button>
          ) : (
            <button
              className="editor__navbar-actions_btn"
              onClick={handleSave}
              disabled={!mdStr}
            >
              <FiSave /> Save
            </button>
          )}

          {copyStatus && (
            <span className="editor__navbar-actions_status">{copyStatus}</span>
          )}
        </>
      </div>
    </nav>
  );
};

export default EditorNavbar;
