import React from "react";
import "./SignUpForm.css";
import Inputbox from "../Inputbox/Inputbox";
import Button from "../Button/Button";

const SignUpForm = (props) => {
  return (
    <>
      <form>
        <div className="input-wrap">
          <Inputbox
            id = {props.inputId}
            type={props.inputType}
            value={props.inputValue}
            placeholder={props.inputPlaceholder}
            onChange={props.inputOnChange}
         />
        </div>
      </form>
      <div className="button-wrap">
          <Button
            buttonId={props.buttonId}
            type="submit"
            placeholder={props.buttonPlaceholder}
            onClick={props.buttonOnClick}
          />
        </div>
    </>
  );
};

export default SignUpForm;
