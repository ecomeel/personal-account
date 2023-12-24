import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useAuth } from "../../hooks/use-auth";
import { logoutUser } from "../../store/slices/userSlice";
import Button from "../../components/Button/Button";
import "./homepage.scss";

export default function HomePage() {
    const dispatch = useDispatch();
    const { isAuth, name, surname, phone, email } = useAuth();
    return isAuth ? (
        <div>
            Welcome {name}
            <Button
                text="Выйти"
                handleBtnClick={() => dispatch(logoutUser())}
            />
        </div>
    ) : (
        <div className="homepage">
            <Link className="homepage__link" to="/login">
                Login
            </Link>
            <Link className="homepage__link" to="/registration">
                Registration
            </Link>
        </div>
    );
}
