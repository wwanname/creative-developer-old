/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App"
import "./globals.css";

ReactDOM.createRoot(document.getElementById("root")).render (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </React.StrictMode>
)