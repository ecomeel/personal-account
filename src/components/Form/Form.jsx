import React from "react";
import { useState } from "react";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import GreetingNewUser from "../GreetingNewUser/GreetingNewUser";

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

    function areInputsFilled() {
        let noError = true;
        for (let param in user) {
            if (param == "isPassConfirm") continue;

            const input = document.getElementById(param);

            if (input.value === "") {
                input.classList.add("red-border");
                noError = false;
            } else {
                input.classList.remove("red-border");
            }
        }
        return noError;
    }

    function arePasswordsMatch() {
        const pass = document.getElementById("password");
        const checkPass = document.getElementById("checkPassword");

        if (user.password === user.checkPassword) {
            pass.classList.remove("red-border");
            checkPass.classList.remove("red-border");
            return true;
        } else {
            const pass = document.getElementById("password");
            const checkPass = document.getElementById("checkPassword");

            pass.value = "";
            checkPass.value = "";

            pass.classList.add("red-border");
            checkPass.classList.add("red-border");
            return false;
        }
    }

    function validation() {
        if (!areInputsFilled()) {
            alert("Заполните пустые поля");
            return false;
        }

        if (!arePasswordsMatch()) {
            alert("Пароли не совпадают");
            return false;
        }

        if (!user.isPassConfirm) {
            alert("Подтвердите пароль");
            return false;
        }

        return true;
    }

    function greetingUser() {
        const greetingPopup = document.getElementById("greetingPopup");
        greetingPopup.classList.add("active");

        const closeGreeting = document.getElementById("greetingCloseBtn");
        closeGreeting.addEventListener("click", () => {
            greetingPopup.classList.remove("active");
        });
    }

    function handleBtnClick() {
        if (!validation()) {
            return;
        }

        greetingUser();
    }

    function handleInputChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    function handleCheckboxChange(e) {
        setUser({
            ...user,
            isPassConfirm: e.target.checked,
        });
    }

    return (
        <div className="form">
            <Input
                name="name"
                type="text"
                placeholder="Имя"
                value={user.name}
                onChange={handleInputChange}
            />

            <Input
                name="surname"
                type="text"
                placeholder="Фамилия"
                value={user.surname}
                onChange={handleInputChange}
            />
            <Input
                name="phone"
                type="tel"
                placeholder="Номер телефона"
                value={user.phone}
                onChange={handleInputChange}
            />
            <Input
                name="email"
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={handleInputChange}
            />
            <Input
                name="password"
                type="password"
                placeholder="Пароль"
                value={user.password}
                onChange={handleInputChange}
            />
            <Input
                name="checkPassword"
                type="password"
                placeholder="Повторите пароль"
                value={user.checkPassword}
                onChange={handleInputChange}
            />
            <Checkbox
                name="pass-confirmation"
                label="Подтверждаю пароль"
                isConfirm={user.isPassConfirm}
                onChange={handleCheckboxChange}
            />
            <Button
                name="save-data"
                text="Продолжить"
                onClick={handleBtnClick}
            />
            <GreetingNewUser 
                name={user.name}
                surname={user.surname}
            />
        </div>
    );
}
