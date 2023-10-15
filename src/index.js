import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CurrentUserProvider } from "store/user";
import Main from "pages/Main";
import ProtectedRouteElement from "components/ProtectedRouteElement";
import Movies from "pages/Movies";
import SavedMovies from "pages/SavedMovies";
import Register from "pages/Register";
import Login from "pages/Login";
import Profile from "pages/Profile";
import PageNotFound from "pages/PageNotFound";
import "styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={<ProtectedRouteElement element={Movies} />}
          />
          <Route
            path="/saved-movies"
            element={<ProtectedRouteElement element={SavedMovies} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRouteElement element={Profile} />}
          />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CurrentUserProvider>
  </React.StrictMode>,
);
