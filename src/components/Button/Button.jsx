import React from "react";

import './button.scss'

export default function Button(props) {
    return (
        <button onClick={props.onClick} className="button">{props.text}</button>
    )
}