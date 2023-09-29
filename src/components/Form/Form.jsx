import React from "react";
import { useState } from "react";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";

export default function Form() {
    const [user, setUser] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        password: "",
        checkPassword: "",
        isPassConfirm: false,
    });

    function handleNameInputChange(e) {
        setUser({
            ...user,
            name: e.target.value,
        })
    }

    function handleSurnameInputChange(e) {
        setUser({
            ...user,
            surname: e.target.value
        })
    }

    function handlePhoneInputChange(e) {
        setUser({
            ...user,
            phone: e.target.value
        })
    }

    function handleEmailInputChange(e) {
        setUser({
            ...user,
            email: e.target.value
        })
    }

    function handlePasswordInputChange(e) {
        setUser({
            ...user,
            password: e.target.value
        })
    }

    function handleCheckPasswordInputChange(e) {
        setUser({
            ...user,
            checkPassword: e.target.value
        })
    }

    function handleBtnClick() {
        console.log(user)

    }

    return (
        <div className="form">
            <Input
                name="name"
                type="text"
                placeholder="Имя"
                value={user.name}
                onChange={handleNameInputChange}
            />
            <Input
                name="surname"
                type="text"
                placeholder="Фамилия"
                value={user.surname}
                onChange={handleSurnameInputChange}
            />
            <Input
                name="phone"
                type="tel"
                placeholder="Номер телефона"
                value={user.phone}
                onChange={handlePhoneInputChange}
            />
            <Input
                name="email"
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={handleEmailInputChange}
            />
            <Input
                name="password"
                type="password"
                placeholder="Пароль"
                value={user.password}
                onChange={handlePasswordInputChange}
            />
            <Input
                name="check-password"
                type="password"
                placeholder="Повторите пароль"
                value={user.checkPassword}
                onChange={handleCheckPasswordInputChange}
            />

            {/* Ошибка чтения с паролями */}
            <Checkbox name="pass-confirmation" label="Подтверждаю пароль" />
            <Button name="save-data" text="Продолжить" onClick={handleBtnClick}/>
        </div>
    );
}
