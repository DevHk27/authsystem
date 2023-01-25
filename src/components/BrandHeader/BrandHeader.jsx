import React from "react";
import "./BrandHeader.css";

const BrandHeader = (props) => {
  return (
    <>
        <h1 className="brand-header">{props.brandHeading}</h1>
        <p>{props.brandSlogan}</p>
    </>
  );
};

export default BrandHeader;