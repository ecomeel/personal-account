import React from "react";
import Input from "../Input/Input";

export default function Form() {
    return (
        <div className="form">
            <Input
                name='name'
                type='text'
                placeholder='Имя'
            />
            <Input
                name='surname'
                type='text'
                placeholder='Фамилия'
            />
            <Input
                name='phone'
                type='tel'
                placeholder='Номер телефона'
            />
            <Input
                name='email'
                type='email'
                placeholder='Email'
            />
            <Input
                name='password'
                type='password'
                placeholder='Пароль'
            />
            <Input
                name='check-password'
                type='password'
                placeholder='Повторите пароль'
            />
            <label htmlFor="pass-confirmation">
                <Input type='checkbox' name='pass-confirmation' />
                <p>Подтверждаю пароль</p>
            </label>

        </div>
    )
}