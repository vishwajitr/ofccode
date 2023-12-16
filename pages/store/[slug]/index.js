import React, { Component } from "react";
import { useRouter } from "next/router";
import GetServerSideProps from "next";
import NextPage from "next";
import Link from "next/link";
import axios from "axios";
import _ from "lodash";
import Content from "../../components/Content";
import OffersPageContent from '../../components/OffersPageContent'
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
      {/* <Content
        {...props}
        headerTag1={
          props.storeInfo.formatted_name +
          " Coupons And Discount Codes For " +
          getParsedDate() +
          " 2021"
        }
        headerTag2={
          "Latest " +
          props.storeInfo.formatted_name +
          " Coupon Codes, Discount Offers & Promotional Deals"
        }
        description={props.storeInfo.metaInfo__desc}
      /> */}
        
       {(props.cuelinksOffers) ? 
       <div>
         <OffersPageContent
          {...props}
          headerTag1={
            "Trending Offers from Top Stores "
          }       
          description={'We are please to provide some trending offers from other stores if you have habbit of saving while doing online shopping this is best place for you'}
        />
       </div>
       : <div></div>} 
       
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const storeSlug = params.slug;
  const response = await fetch(
    `http://140.238.244.200/search/store__by__slug?q=${storeSlug}`
  );
  const getStoreIdRes = await response.json();
  // console.log(getStoreIdRes)
  // const storeId = getStoreIdRes.affInfo__StoreId;
  // const dataUrl =
  //   "https://export.admitad.com/en/webmaster/websites/1777052/coupons/export/?website=1777052&advcampaigns=" +
  //   storeId +
  //   "&region=00&code=eyq48w62bj&user=vishwajit82&format=csv&v=4";
  // const res = await axios.get(dataUrl);
  // const data = Papa.parse(res.data);


  // let clinksRes = await fetch(
  //   `http://140.238.244.200/cuels/offers`
  // );
  // let cuelinksOffers = await clinksRes.json();  


  let localstoresRes = await fetch(
    `http://140.238.244.200/search/offer__by__store__slug?q=${storeSlug}`
  );
  let localstoresOffers = await localstoresRes.json();  
  
  // let clinksRes = await fetch(
  //   `http://140.238.244.200/search/offers__by__query?q=${storeSlug}`
  // );
  // let cuelinksOffers = await clinksRes.json();  
    

  return {
    props: {
      storeInfo: getStoreIdRes.results[0],
      cuelinksOffers: localstoresOffers.results? localstoresOffers.results : [],
      // couponsData:data? data: [],
      // cuelinksOffers: cuelinksOffers.results? cuelinksOffers.results : [],
    },
  };
}

export default StorePage;
