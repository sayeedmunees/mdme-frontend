import React from "react";
import "./history.css";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";

const History = () => {
  const [documents, setDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data - replace with localStorage
  useEffect(() => {
    const mockDocs = [
      {
        id: 1,
        title: "My First Document",
        preview: "This is my first markdown document...",
        date: "2025-09-20",
      },
      {
        id: 2,
        title: "Project Notes",
        preview: "Project setup and requirements...",
        date: "2025-09-19",
      },
      {
        id: 3,
        title: "Meeting Summary",
        preview: "Team meeting notes and action items...",
        date: "2025-09-18",
      },
    ];
    setDocuments(mockDocs);
  }, []);

  const filteredDocs = documents.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (doc) => {
    console.log("Edit:", doc);
    // Navigate to editor
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this document?")) {
      setDocuments((docs) => docs.filter((doc) => doc.id !== id));
    }
  };

  return (
    <>
      <Navbar />
      <div className="history-page">
        <div className="history-header">
          <h1>Document History</h1>
          <input
            type="text"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="documents-grid">
          {filteredDocs.length === 0 ? (
            <div className="empty-state">
              <p>No documents found</p>
            </div>
          ) : (
            filteredDocs.map((doc) => (
              <div key={doc.id} className="document-card">
                <h3>{doc.title}</h3>
                <p>{doc.preview}</p>
                <div className="card-footer">
                  <span className="date">{doc.date}</span>
                  <div className="actions">
                    <button onClick={() => handleEdit(doc)}>Edit</button>
                    <button onClick={() => handleDelete(doc.id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default History;
