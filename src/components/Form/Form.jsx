import React from "react";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";

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
            <Checkbox name="pass-confirmation" label="Подтверждаю пароль" />
            <Button name='save-data' text='Продолжить' />
        </div>
    );
}
