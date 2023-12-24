import React from "react";
import crossImg from "../../assets/cross.png";
import "./greetingNewUser.scss";

export default function GreetingNewUser(props) {
    return (
        <div id="greetingPopup" className="greeting-wrapper">
            <div className="greeting-new-user">
                <h2 className="greeting-new-user__title">Добро пожаловать!</h2>
                <h3 className="greeting-new-user__subtitle">
                    {props.name} {props.surname}
                </h3>
                <p className="greeting-new-user__text">
                    Вы можете успешно{" "}
                    <a href="" className="blue-color">
                        авторизоваться
                    </a>
                    !
                </p>
                <img
                    id="greetingCloseBtn"
                    className="greeting-new-user__closeBtn"
                    src={crossImg}
                    alt="close"
                />
            </div>
        </div>
    );
}
