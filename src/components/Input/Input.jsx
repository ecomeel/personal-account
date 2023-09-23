import React from "react";

export default function Input({ name, type, placeholder }) {
    return (
        <input 
            className="input"
            name={name}
            type={type}
            placeholder={placeholder}
             /> 
    )
}