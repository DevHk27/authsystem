import React from "react";
import "./appLayout.css";

const AppLayout = (props) => {
  return (
    <>
      <div className="wholebody">
        <div className="left-panel">{props.leftPanel}</div>
        <div className="right-panel">{props.rightPanel}</div>
      </div>
    </>
  );
};

export default AppLayout;
