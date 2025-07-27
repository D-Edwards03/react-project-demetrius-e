import React from "react";

function MyButton ({label, onClick, type = 'button'}) {
    return (
        <button type={type} onClick={onClick} className="myButton">{label}</button>
    );
}

export default MyButton;