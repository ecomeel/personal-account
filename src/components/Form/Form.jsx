import React from "react";
import { useState } from "react";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";

export default function Form() {
    const [person, setPerson] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        password: "dsfsdf",
        checkPassword: "11",
        isPassConfirm: false,
    });

    return (
        <div className="form">
            <Input
                name="name"
                type="text"
                placeholder="Имя"
                value={person.name}
            />
            <Input
                name="surname"
                type="text"
                placeholder="Фамилия"
                value={person.surname}
            />
            <Input
                name="phone"
                type="tel"
                placeholder="Номер телефона"
                value={person.phone}
            />
            <Input
                name="email"
                type="email"
                placeholder="Email"
                value={person.email}
            />
            <Input
                name="password"
                type="password"
                placeholder="Пароль"
                value={person.password}
            />
            <Input
                name="check-password"
                type="password"
                placeholder="Повторите пароль"
                value={person.checkPassword}
            />

            {/* Ошибка чтения с паролями */}
            <Checkbox name="pass-confirmation" label="Подтверждаю пароль" />
            <Button name="save-data" text="Продолжить" />
        </div>
    );
}
