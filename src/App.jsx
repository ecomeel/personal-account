import React from "react";
import Header from "./components/Header/Header"
import Form from "./components/Form/Form";
import Login from "./components/Login/Login";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Form />
      <Login />
    </div>
  )
}
