import React, { Component } from "react";
import { useRouter } from "next/router";
import GetServerSideProps from "next";
import NextPage from "next";
import Link from "next/link";
import axios from "axios";
import _ from "lodash";
import KwContent from "../components/KwContent";
import OffersPageContent from "../components/OffersPageContent";
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
      {console.log(props.keywordInfo.keyword)}
      <KwContent {...props} headerTag1={props.keywordInfo.keyword} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const Slug = params.slug;
  const response = await fetch(
    `https://ofccode-api-jd5rsee48-sportybruh1990.vercel.app/api/front/search/kws__by__slug?q=${Slug}`
  );
  const getStoreIdRes = await response.json();


  const storeId = getStoreIdRes.dataSet__storesId[0];
  const dataUrl =
    "https://export.admitad.com/en/webmaster/websites/1777052/coupons/export/?website=1777052&advcampaigns=" +
    storeId +
    "&region=00&code=eyq48w62bj&user=vishwajit82&format=csv&v=4";
  const res = await axios.get(dataUrl);
  const data = Papa.parse(res.data);



  const kws__response = await fetch(
    `https://ofccode-api-jd5rsee48-sportybruh1990.vercel.app/api/front/keywords/`
  );
  const getKeywordsRes = await kws__response.json();


  
  return {
    props: {
      keywordInfo: getStoreIdRes,
      keywordSet: getKeywordsRes,
      couponsData1: data,
    },
  };
}

export default StorePage;
