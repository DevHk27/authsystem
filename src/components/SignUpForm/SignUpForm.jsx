import React from "react";

const SignUpForm = (props) => {
    return (
        <>
            <form>
                <label for={props.inputName}>{props.inputLabel}</label>
                <Inputbox  />
            </form>
        </>
    )
}

export default SignUpForm;