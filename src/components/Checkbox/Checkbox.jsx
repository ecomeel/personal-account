import React from "react";

export default function Checkbox({ name, label }) {
    return (
        <div className="checkbox">
            <input
                id="checkbox"
                className="checkbox__input"
                type="checkbox"
                name={name}
            />
            <label className="checkbox__label" htmlFor="checkbox">
                {label}
            </label>
        </div>
    );
}
