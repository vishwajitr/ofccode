import React, { useState, useEffect } from "react";
import Head from "next/head";
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
  

const serachPage = (props) => {  


    useEffect(() => {
        (function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(
            arguments)},g[o]['t']=1*new Date})(window,'_googCsa');

            var pageOptions = {
                "pubId": "pub-9616389000213823", // Make sure this the correct client ID!
                "query": "hotels",
                "adPage": 5,
                "channel": "searchchnm"
              };
            
              var adblock1 = {
                "container": "afscontainer1",
                "width": "700",
                "maxTop": 2,
                "fontFamily": "times new roman",
                "fontSizeTitle": 16,
                "colorTitleLink": "FE6751",
                "colorBackground": "fe6751",
                "detailedAttribution": false
              };
            
              var adblock2 = {
                "container": "afscontainer2",
                "width": "700",
                "number": 2,
                "fontFamily": "times new roman",
                "colorTitleLink": "FE6751",
                "detailedAttribution": false
              };
            
              _googCsa('ads', pageOptions, adblock1, adblock2);
        //   https://developers.google.com/custom-search-ads/web/code-generator
        // https://developers.google.com/custom-search-ads/web


        // https://developers.google.com/custom-search/v1/introduction
//         You're all set!
// You're ready to start developing with Custom Search API
// YOUR API KEY
        // AIzaSyCArN0Y_4eUND4ffD-nJ1XPRbjhJ6XyAjw
    
      });

  return (
    <div>
        <Head>
        <script async="async" src="https://www.google.com/adsense/search/ads.js"></script>
        <script async src="https://cse.google.com/cse.js?cx=e877bbb1cb1dec634"></script>
        </Head>
        <div id="afscontainer1"></div>      
        <div class="gcse-search"></div>
        <div class="gcse-searchresults"></div>        
        <div id="afscontainer2"></div>       
    </div>
  );
};



export async function getServerSideProps({ params }) {
  const storeSlug = params.slug;
  const response = await fetch(
    `https://ofccode-api-sportybruh1990.vercel.app/api/front/${storeSlug}`
  );
  const getStoreIdRes = await response.json();
  const storeId = getStoreIdRes.affInfo__StoreId;
  const dataUrl =
    "https://export.admitad.com/en/webmaster/websites/1777052/coupons/export/?website=1777052&advcampaigns=" +
    storeId +
    "&region=00&code=eyq48w62bj&user=vishwajit82&format=csv&v=4";
  const res = await axios.get(dataUrl);
  const data = Papa.parse(res.data);


  let clinksRes = await fetch(
    `https://ofccode-api-sportybruh1990.vercel.app/api/front/cuelinks/offers`
  );
  let cuelinksOffers = await clinksRes.json();  



  return {
    props: {
      storeInfo: getStoreIdRes,
      couponsData1: data,
      cuelinksOffers: cuelinksOffers,
    },
  };
}

export default serachPage;
