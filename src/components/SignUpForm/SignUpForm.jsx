import React from "react";
import "./SignUpForm.css";
import Inputbox from "../Inputbox/Inputbox";
import Button from "../Button/Button";

const SignUpForm = (props) => {
  return (
    <>
      <form>
        <div className="input-wrap">
          <Inputbox type={props.inputType} placeholder={props.inputPlaceholder} />
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
