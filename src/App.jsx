import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrPage from "./pages/RegistrPage";

import "./app.scss";

export default function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registration" element={<RegistrPage />} />
            </Routes>
        </div>
    );
}
