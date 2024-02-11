import React, { Component } from "react";
import { useRouter } from "next/router";
import GetServerSideProps from "next";
import NextPage from "next";
import Link from "next/link";
import axios from "axios";
import _ from "lodash";
import KwContent from "../components/KwContent";
import OffersPageContent from "../components/OffersPageContent";
import KwRightSide from "../components/KwRightSide";
var Papa = require("papaparse");

const getParsedDate = () => {
  var d = new Date();
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  return month[d.getMonth()];
};

const StorePage = (props) => {
  return (
    <div>
      {/* 
      TODO
      Share Social Media
      //Related kws
      Related Products

      Store Overview

      Popular Search  
      // Category Browse


      */}
      {/* {console.log(props.keywordInfo.keyword)} */}
     

      <OffersPageContent
        {...props}
        headerTag1={
          props.keywordInfo.keyword+ "for December " +
          getParsedDate() +
          " 2023"
        }
          headerTag2={
            "Promo Codes, Coupon Codes & Discounts for December " +
            getParsedDate() +
            " 2023"
          }       
          description={'We are please to provide some trending offers from other stores if you have habbit of saving while doing online shopping this is best place for you'}
        
      /> 
      
      {/* <KwContent {...props} headerTag1={props.keywordInfo.keyword} /> */}
      
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const Slug = params.slug;
  const response = await fetch(
    `https://ofccode-api-git-main-sportybruh1990.vercel.app/api/front/kws__by__slug?q=${Slug}`
  );
  const getStoreIdRes = await response.json();

  console.log(getStoreIdRes)
  const storeId = getStoreIdRes.results[0].dataSet__storesId[0];
  const dataUrl = getStoreIdRes.results[0].dataSet__offers;
  const clinksRes =  await fetch(
    dataUrl
  );
  let cuelinksOffers = await clinksRes.json();    



  const kws__response = await fetch(
    `https://ofccode-api-git-main-sportybruh1990.vercel.app/api/front/keywords`
  );
  const getKeywordsRes = await kws__response.json();


  
  return {
    props: {
      keywordInfo: getStoreIdRes.results[0],
      keywordSet: getKeywordsRes.results,
      cuelinksOffers: cuelinksOffers.results,
    },
  };
}

export default StorePage;
