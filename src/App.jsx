import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import EditAndPreview from "./pages/editAndPreiview/EditAndPreview";
import History from "./pages/history/History";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/editor" element={<EditAndPreview />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
