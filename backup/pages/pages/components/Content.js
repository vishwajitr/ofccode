import React, { Component } from "react";
import LeftSide from "./../components/LeftSide";
import RightSide from "./../components/RightSide";

const Content  = (props) => {
    return (
      <div className="content-container">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <LeftSide {...props} />
            </div>
            <div className="col-md-4">
              <RightSide {...props} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Content
