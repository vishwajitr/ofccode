import React, { Component } from "react";
import KwLeftSide from "./KwLeftSide";
import KwRightSide from "./KwRightSide";
import PopularKws from './KeywordBlocks/PopularKws'

const KwContent  = (props) => {
    return (
      <div className="content-container">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <KwLeftSide {...props} />
            </div>
            <div className="col-md-4">
            <KwRightSide {...props} />
            </div>
          </div>
        </div>
        <hr/>
        <div className="container">
        <PopularKws {...props} />
        </div> 
        Category Browse

      </div>
    );
}

export default KwContent
