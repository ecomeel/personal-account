import React from "react";

export default function Button(props) {
    function handleBtnClick() {
        console.log('test')
    }

    return (
        <button onClick={handleBtnClick} className="button">{props.text}</button>
    )
}