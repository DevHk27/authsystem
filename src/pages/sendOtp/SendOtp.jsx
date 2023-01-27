import React from "react";
import AppLayout from "../AppLayout/AppLayout";
import LeftPanel from "../../components/LeftPanel/LeftPanel"

const SendOtp = () => {
    return (
        <>
        <AppLayout 
            leftPanel={<LeftPanel appBody="hello"/>}
        />
        </>
    )
}
export default SendOtp;