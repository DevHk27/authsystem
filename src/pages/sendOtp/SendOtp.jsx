import React, { useState } from "react";
import AppLayout from "../AppLayout/AppLayout";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { sendOtp } from "../../service/signup.service";
import { useNavigate } from "react-router-dom";
import './sendOtp.css';

const SendOtp = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <AppLayout
        leftPanel={
          <LeftPanel
            appBody={
              <>
                <SignUpForm
                  inputId="userId"
                  inputType="email"
                  inputPlaceholder="enter your email address to get started"
                  buttonId="sendotpbtn"
                  buttonPlaceholder="Send OTP"
                  buttonOnClick={() => {
                    if ( sendOtpInternal() ) {
                    navigate("verifyOtp")
                    }else{
                      setResponseMessage("Please enter a valid email")
                    }
                  }}
                />
                <div>
                  <h5>{responseMessage}</h5>
                </div>
              </>
            }
          />
        }
      />
    </>
  );
};

const sendOtpInternal = () => {
  const email = document.getElementById("userId").value;
  if (email.length < 1) {
    return false 
  } else {
    sendOtp(email)
    return true
  }
};
export default SendOtp;
