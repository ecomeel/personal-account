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

    // const [isError, setError] = useState(false);

    function areInputsFilled() {
        let noError = true;
        for(let param in user) {
            if (param == 'isPassConfirm') continue

            const input = document.getElementById(param)

            if (input.value === '') {
                input.classList.add('red-border')
                noError = false
            } else {
                input.classList.remove('red-border')
            }
        }
        return noError
    }

    function handleBtnClick() {
        if (!areInputsFilled()) {
            alert('Заполните пустые поля')
            return 
        }

        

        console.log('next step')
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
        </div>
    );
}
