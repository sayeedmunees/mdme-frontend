import React, { useState } from "react";
import "./editAndPreview.css";
import Editor from "../../components/editor/Editor";
import Preview from "../../components/preview/Preview";
import EditorNavbar from "../../components/editorNavbar/EditorNavbar";

const EditAndPreview = () => {
  const [mdStr, setMdStr] = useState(`# Welcome to MDME
Start typing here to see the live preview!

## Features
- Simple markdown editor
- Live preview
- Clean interface
- Copy and Save functionality

**Happy writing!** ✨`);

  const [title, setTitle] = useState("Untitled-Document");

  return (
    <div className="mdme__editAndPreview section__padding">
      <EditorNavbar mdStr={mdStr} title={title} />

      <div className="mdme__editAndPreview-content">
        <div className="mdme__editAndPreview-editor">
          <Editor
            mdStr={mdStr}
            setMdStr={setMdStr}
            title={title}
            setTitle={setTitle}
          />
        </div>
        <div className="mdme__editAndPreview-preview">
          <Preview mdStr={mdStr} />
        </div>
      </div>
    </div>
  );
};

export default EditAndPreview;
