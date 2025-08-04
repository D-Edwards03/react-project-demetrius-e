import React from "react";

function MyButton ({label, onClick, type = 'button'}) {
    return (
        <button type={type} onClick={onClick} className="myButton">{label}</button>
        /* A reusable button component that accepts label, onClick handler, and type as props */
    );
}

export default MyButton;