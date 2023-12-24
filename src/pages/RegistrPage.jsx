import React from "react";

import Header from "../components/Header/Header";
import RegistrForm from "../components/Registr-Form/RegistrForm";
import Login from "../components/Login/Login";

export default function RegistrPage() {
    return (
        <div>
            <Header />
            <RegistrForm />
            <Login />
        </div>
    );
}
