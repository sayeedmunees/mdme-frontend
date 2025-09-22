import React from "react";
import "./history.css";
import HistoryNavbar from "../../components/historyNavbar/HistoryNavbar";
import { useState, useEffect } from "react";
import { deleteMarkdownAPI, getMarkdownAPI } from "../../services/allAPI";

const History = () => {
  const [documents, setDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMarkDown = async () => {
    const result = await getMarkdownAPI();
    console.log(result);

    setDocuments(result.data);
  };

  const filteredDocs = documents.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (doc) => {
    console.log("Edit:", doc);
    // Navigate to editor
  };

  const handleDelete = async (id) => {
    try {
      const result = await deleteMarkdownAPI(id);
      console.log(result);
      getMarkDown();
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    getMarkDown();
  }, []);

  return (
    <>
      <HistoryNavbar />
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
                <p>{doc.mdData}</p>
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
