import React from "react";
import "./BrandHeader.css";

const BrandHeader = (props) => {
  return (
    <>
      <div className="brand-header">
        <h1 className="">{props.brandheading}</h1>
        <p>{props.brandslogan}</p>
      </div>
    </>
  );
};

export default BrandHeader;