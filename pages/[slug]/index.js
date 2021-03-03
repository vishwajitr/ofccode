import React, { Component } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
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
}


const StorePage =  (props) => {
const router = useRouter()
  // const { slug } = router.query
  const domainName = 'https://offerscode.in';
  let relatedKeyword = false;
  if(props.storeInfo.name){
    relatedKeyword = true;
  }
  console.log(router);
  return (
    <div>     
    <Content {...props} headerTag1={props.storeInfo.name + " Coupons And Discount Codes For " +getParsedDate() + " 2021"} headerTag2={"Latest "+props.storeInfo.name +" Coupon Codes, Discount Offers & Promotional Deals"} description={props.storeInfo.metaInfo.desc}/>    
    {relatedKeyword && (props.storeInfo.name=='Boat') ? (<div>
      <h3>Related Keywords</h3>  
      <ul>
        <li><Link href={domainName + router.asPath +`/?dealtype=`+ props.storeInfo.name +` coupons`}><a>which earphone is best in {props.storeInfo.name}</a></Link></li>
        <li><Link href={domainName + router.asPath +`/?dealtype=`+ props.storeInfo.name +` deals`}><a>{props.storeInfo.name} Deals</a></Link></li> 
        <li><Link href={domainName + router.asPath +`/?dealtype=`+ props.storeInfo.name +` promo-code`}><a>{props.storeInfo.name} PromoCode</a></Link></li> 
        <li><Link href={domainName + router.asPath +`/?dealtype=latest-offers =`+ props.storeInfo.name +` `}><a>Latest {props.storeInfo.name} Offers</a></Link></li>          
      </ul>
    </div>): (<div></div>)}
    </div>
  );   
}

export async function getStaticPaths() {
  const res = await axios.get('hhttps://ofccode-api.vercel.app/api/front');
  // console.log(res.data)
  const stores = (res.data)?res.data:{};
  const paths = stores.map((store) => ({
    params: { slug: store.slug, id: store.affInfo.StoreId },
  }))
  // const paths =  [
  //   { params: {slug : 'bangood', id : '13623'} }, // See the "paths" section below
  // ];
  // console.log(paths)


  return { paths, fallback: false }
}


export const getStaticProps  = async ({params}) => {
  
  const storeSlug = params.slug;
  // const storeId = params.id;
  // const storeId = '13623';
  
  const getStoreIdRes = await axios.get(`https://ofccode-api.vercel.app/api/front/${storeSlug}`);
  const storeId = getStoreIdRes.data.affInfo.StoreId;
  const dataUrl = getStoreIdRes.data.dataUrl;
  // console.log(params);
  const res = await axios.get(dataUrl);
  // const res = await axios.get(`http://127.0.0.1:3000/CouponsData/${storeSlug}/data.csv`);
  const data = Papa.parse(res.data);

    return {
      props:{
        'storeInfo':getStoreIdRes.data,
        couponsData1 :data
      },   
    };
    
  }
  

    
export default StorePage;

