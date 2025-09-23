import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import EditAndPreview from "./pages/editAndPreiview/EditAndPreview";
import History from "./pages/history/History";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

function App() {
  const [updateMd, setUpdateMd] = useState(false);
  const [historyEdit, setHistoryEdit] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/editor"
        element={
          <EditAndPreview
            updateMd={updateMd}
            setUpdateMd={setUpdateMd}
            historyEdit={historyEdit}
            setHistoryEdit={setHistoryEdit}
          />
        }
      />
      <Route
        path="/history"
        element={
          <History
            updateMd={updateMd}
            setUpdateMd={setUpdateMd}
            historyEdit={historyEdit}
            setHistoryEdit={setHistoryEdit}
          />
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
