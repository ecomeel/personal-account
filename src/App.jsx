import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrPage from "./pages/RegistrPage";

import './app.scss'

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Login from "./components/Login/Login";

export default function App() {
    return (
        <div className="container">
          {/* <Header />
          <Form />
          <Login /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrPage />} />
          </Routes>
        </div>
    );
}
