import React from "react";

const Button = (props) =>{
    return <>
        <button type={props.type} onClick={props.onClick} className="button-common">{props.placeholder}</button>
    </>
}

export default Button;