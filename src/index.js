import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "pages/Main";
import Profile from "pages/Profile";
import "styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
