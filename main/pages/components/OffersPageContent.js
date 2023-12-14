import React, { Component } from "react";
import LeftSideOffers from "./LeftSideOffers";
import RightSide from "./RightSide";

const Content  = (props) => {
    return (
      <div className="content-container">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <LeftSideOffers {...props} />
            </div>
            <div className="col-md-4">
              <h4>Do Like Our Facebook Page</h4>  
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FOffersCode.In&tabs=timeline&width=340&height=550&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1873426346256864" width="340" height="550"  scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Content
