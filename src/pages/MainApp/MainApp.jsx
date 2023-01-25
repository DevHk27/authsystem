import React from "react";
import "./MainApp.css";
import BrandHeader from "../../components/BrandHeader/BrandHeader";
import AppLayout from "../AppLayout/AppLayout";

const MainApp = () => {
  return(
    <>
      <AppLayout 
        appHeader={<BrandHeader brandHeading="Task-errrr" brandSlogan="For your day-to-day tasks" />}
        />
    </>
  );
};

export default MainApp;
