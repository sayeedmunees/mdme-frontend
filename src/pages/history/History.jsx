import React, { useState, useEffect } from "react";
import "./history.css";
import HistoryNavbar from "../../components/historyNavbar/HistoryNavbar";
import { useNavigate } from "react-router-dom";
import {
  deleteMarkdownAPI,
  getMarkdownAPI,
  editMarkdownAPI,
  getAMarkdownAPI,
} from "../../services/allAPI";

const History = ({ updateMd, setUpdateMd, historyEdit, setHistoryEdit }) => {
  const [documents, setDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loadingId, setLoadingId] = useState(null);
  const navigate = useNavigate();

  const getMarkDown = async () => {
    try {
      const result = await getMarkdownAPI();
      console.log(result);
      setDocuments(result.data || []);
    } catch (err) {
      console.error("Error fetching documents:", err);
      setDocuments([]);
    }
  };

  const filteredDocs = documents.filter((doc) =>
    doc.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = async (doc) => {
    console.log("Edit:", doc);
    setHistoryEdit(true);

    try {
      setLoadingId(doc.id);
      console.log(doc.id);
      const response = await getAMarkdownAPI(doc.id);
      console.log("Fetched document:", response);
      setUpdateMd(true);

      if (response && response.data) {
        navigate("/editor", {
          state: {
            title: response.data.title,
            content: response.data.mdData,
            id: response.data.id,
            date: response.data.date,
            isEditing: true,
          },
        });
      }
    } catch (error) {
      console.error("Error fetching document:", error);
      alert("Failed to load document. Please try again.");
    } finally {
      setLoadingId(null);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this document?")) {
      try {
        setLoadingId(id);
        const result = await deleteMarkdownAPI(id);
        console.log(result);
        getMarkDown();
      } catch (err) {
        console.error("Error deleting document:", err);
        alert("Failed to delete document. Please try again.");
      } finally {
        setLoadingId(null);
      }
    }
  };

  useEffect(() => {
    getMarkDown();
    setHistoryEdit(false);
    setUpdateMd(false);
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
                <h3>{doc.title || "Untitled Document"}</h3>
                <p>{doc.mdData}</p>
                <div className="card-footer">
                  <span className="date">{doc.date}</span>
                  <div className="actions">
                    <button
                      onClick={() => handleEdit(doc)}
                      disabled={loadingId === doc.id}
                    >
                      {loadingId === doc.id ? "Loading..." : "Edit"}
                    </button>
                    <button
                      onClick={() => handleDelete(doc.id)}
                      disabled={loadingId === doc.id}
                    >
                      {loadingId === doc.id ? "Deleting..." : "Delete"}
                    </button>
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
