import React, { Component, useState, useEffect } from "react";
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
        description={'We are please to provide some trending offers from stores if you have habbit of saving while doing online shopping this is best place for you'}
      />
    </div>
  );
};


export async function getServerSideProps({ params }) {
  let response = await fetch(
    `https://ofccode-api-git-main-sportybruh1990.vercel.app/offers`
  );
  let offers = await response.json();  
  // console.log(offers);
  

  return {
    props: {
      cuelinksOffers: offers.results,
    },
  };
}

export default OfferPage;
