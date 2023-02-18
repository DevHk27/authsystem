import React from "react";
import BrandHeader from "../BrandHeader/BrandHeader";
import "./LeftPanel.css";

const LeftPanel = (props) => {
  return (
    <>
      <div className="app-header">
        <BrandHeader
          brandHeading="Task-errrr"
          brandSlogan="For your day-to-day talks"
        />
      </div>
      <div className="app-body">{props.appBody}</div>
    </>
  );
}
export default LeftPanel;
