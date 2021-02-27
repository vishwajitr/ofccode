import React, { Component, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import _ from "lodash";
import Content from "../components/Content";
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
const SerachPage = (props) => {
 

 
  const router = useRouter();
  var storeSlug = router.query.store;
  console.log(router);

  // // Similar to componentDidMount and componentDidUpdate:
  // useEffect(async () => {
  //     const getStoreIdRes = await axios.get(
  //       `https://ofccode-api.vercel.app/api/front/${storeSlug}`
  //     );
  //     const storeId = getStoreIdRes.data.affInfo.StoreId;
  //     const dataUrl = getStoreIdRes.data.dataUrl;
  //     // console.log(params);
  //     const res =  axios.get(dataUrl);
  //     // const res = await axios.get(`http://127.0.0.1:3000/CouponsData/${storeSlug}/data.csv`);
  //     const data = Papa.parse(res.data);
    
  //     return {
  //       props:{
  //         'storeInfo':getStoreIdRes.data,
  //         'couponsData1' :data
  //       },
  //     };
  // });

  return (
    <div>
      <Content
        {...props}
      />
      {/* <h2>Related keywords</h2> */}
      {/* <ul>
        <li><Link href={"/"+router.asPath+`/?dealtype=`+ props.storeInfo.name +` coupons`}><a>{props.storeInfo.name} Coupons</a></Link></li>
        <li><Link href={"/"+router.asPath+`/?dealtype=`+ props.storeInfo.name +` deals`}><a>{props.storeInfo.name} Deals</a></Link></li> 
        <li><Link href={"/"+router.asPath+`/?dealtype=`+ props.storeInfo.name +` promo-code`}><a>{props.storeInfo.name} PromoCode</a></Link></li> 
        <li><Link href={"/"+router.asPath+`/?dealtype=latest-offers =`+ props.storeInfo.name +` `}><a>Latest {props.storeInfo.name} Offers</a></Link></li>  
      </ul> */}
    </div>
  );
};


export default SerachPage;
