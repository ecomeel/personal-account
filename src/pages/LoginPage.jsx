import React from "react";

import Header from "../components/Header/Header";
import LoginForm from "../components/Login-form/LoginForm";
import Login from "../components/Login/Login";

export default function LoginPage() {
    return (
        <div>
            <Header />
            <LoginForm />
            <Login />
        </div>
    );
}
