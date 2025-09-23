import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./editAndPreview.css";
import Editor from "../../components/editor/Editor";
import Preview from "../../components/preview/Preview";
import EditorNavbar from "../../components/editorNavbar/EditorNavbar";

const EditAndPreview = ({
  updateMd,
  setUpdateMd,
  historyEdit,
  setHistoryEdit,
}) => {
  const location = useLocation();

  // Get data from navigation state
  const documentData = location.state;

  const [mdStr, setMdStr] = useState(
    documentData?.content ||
      `# Welcome to MDME
Start typing here to see the live preview!

## Features
- Simple markdown editor
- Live preview
- Clean interface
- Copy and Save functionality

**Happy writing!** ✨`
  );

  const [title, setTitle] = useState(
    documentData?.title || "Untitled-Document"
  );

  // Extract the document ID and editing flag
  const documentId = documentData?.id || null;
  const isEditing = documentData?.isEditing || false;

  console.log("Received document ID:", documentId);

  return (
    <div className="mdme__editAndPreview section__padding">
      {/* Pass documentId and isEditing to EditorNavbar */}
      <EditorNavbar
        mdStr={mdStr}
        title={title}
        documentId={documentId}
        isEditing={isEditing}
        mdId={documentId}
        updateMd={updateMd}
        setUpdateMd={setUpdateMd}
        historyEdit={historyEdit}
        setHistoryEdit={setHistoryEdit}
      />

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
