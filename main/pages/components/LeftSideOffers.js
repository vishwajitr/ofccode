import React, { Component } from "react";
import { useRouter } from "next/router";
import OffersCards from "./Offer/offerCards";

const LeftSide = (props) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div id="LeftSide" className="container-codepage">
      <h1>{props ? props.headerTag1 : ""} </h1>
      <div className="description">{props ? props.description : ""} </div>
      <h2>{props ? props.headerTag2 : ""} </h2>
      <br/>
      <OffersCards {...props} />
    </div>
  );
};

export default LeftSide;
