import React from "react";
import "./SignUpForm.css";

const SignUpForm = (props) => {
  return (
    <>
      <form>
        <div className="input-wrap">
          {props.inputBox}
        </div>
        <div className="button-wrap">
            {props.button}
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
