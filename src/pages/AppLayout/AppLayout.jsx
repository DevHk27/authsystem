import React from "react";
import "./appLayout.css";

 const AppLayout = (props ) => {
  return (
    <>
      <div className="wholebody">
        <div className="left-panel">
          <div className="app-header">
            {props.appHeader}
          </div>
          <div className="app-body">
            {props.appBody}
          </div>
        </div>
        <div className="right-panel">
            {props.rightPanel}
        </div>
      </div>
    </>
  );
};

export default AppLayout;