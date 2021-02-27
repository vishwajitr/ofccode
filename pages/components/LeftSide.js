import React, { Component } from "react";
import Card from "./Cards/Card";

const LeftSide = (props) => {
  return (
    <div id="LeftSide" className=" container-codepage">
      <h1>{(props) ? props.headerTag1: "" } </h1>
      <h1>{(props) ? props.headerTag1: "" } </h1>
      <Card  {...props}  />
    </div>
  );
};

export default LeftSide;
