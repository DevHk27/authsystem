import React from "react";
import './inputbox.css'
const Inputbox = (props) => {
    return <>
    <input id={props.id} type={props.type} value={props.value} placeholder={props.placeholder} className="input-common" onChange={props.onChange}/>
    </>
}

export default Inputbox;