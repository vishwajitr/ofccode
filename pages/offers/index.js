import React, { Component } from "react";
import { useRouter } from "next/router";
import GetServerSideProps from "next";
import NextPage from "next";
import Link from "next/link";
import axios from "axios";
import _ from "lodash";
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

const OfferPage = (props) => {  
  return (
    <div>
      <OffersPageContent
        {...props}
        headerTag1={
          " Coupons And Discount Codes For " +
          getParsedDate() +
          " 2021"
        }
        headerTag2={
          "Latest Offers and Deals from Top Indian stores"
        }
        description={''}
      />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  let clinksRes = await fetch(
    `http://140.238.244.200/offers`
  );
  let cuelinksOffers = await clinksRes.json();  

  return {
    props: {
      cuelinksOffers: cuelinksOffers,
    },
  };
}

export default OfferPage;
