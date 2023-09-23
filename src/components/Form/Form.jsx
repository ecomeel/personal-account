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
        </div>
    )
}