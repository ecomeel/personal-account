import React from "react";
import { Link } from "react-router-dom";

import './homepage.scss'

export default function HomePage() {
    return (
        <div className="homepage">
            <Link className="homepage__link" to="/login">Login</Link>
            <Link className="homepage__link" to="/registration">Registration</Link>
        </div>
    );
}
