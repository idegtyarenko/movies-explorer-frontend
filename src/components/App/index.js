import { Routes, Route } from "react-router-dom";

import Main from "../Main";
import Profile from "../Profile";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
