import React from "react";
import AppLayout from "../AppLayout/AppLayout";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { sendOtp } from "../../service/signup.service";

const SendOtp = () => {
  return (
    <>
      <AppLayout
        leftPanel={
          <LeftPanel
            appBody={
              <SignUpForm
                inputType="email"
                inputPlaceholder="enter your email address to get started"
                buttonId="sendotpbtn"
                buttonPlaceholder="Send OTP"
                buttonOnClick={sendOtp}
              />
            }
          />
        }
      />
    </>
  );
};

export default SendOtp;
