import React, { useState } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import "./editor.css";

const Editor = ({ mdStr, setMdStr }) => {
  const [title, setTitle] = useState("Untitled-Document");

  return (
    <div className="mdme__editor">
      <div className="mdme__editor-header">
        <h3>Editor</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
          placeholder="Enter filename"
        />
      </div>
      <div className="mdme__editor-content">
        <MarkdownEditor
          value={mdStr}
          onChange={(value) => setMdStr(value)}
          height="calc(100vh - 150px)"
          visible={false}
          preview="edit"
          enablePreview={false}
        />
      </div>
    </div>
  );
};

export default Editor;
