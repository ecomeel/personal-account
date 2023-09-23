import React from "react";
import Input from "../Input/Input";

export default function Form() {
    return (
        <div className="form">
            <Input name="name" type="text" placeholder="Имя" />
            <Input name="surname" type="text" placeholder="Фамилия" />
            <Input name="phone" type="tel" placeholder="Номер телефона" />
            <Input name="email" type="email" placeholder="Email" />
            <Input name="password" type="password" placeholder="Пароль" />
            <Input
                name="check-password"
                type="password"
                placeholder="Повторите пароль"
            />

            <div className="checkbox">
                <input id="checkbox1" className="checkbox__input" type="checkbox" name="pass-confirmation" />
                <label className="checkbox__label" htmlFor="checkbox1">Подтверждаю пароль</label>
            </div>

        </div>
    );
}
