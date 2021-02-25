import React, { Component } from "react";
import { useRouter } from 'next/router';
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

  return (
    <div>     
    <Content {...props} headerTag1={props.storeInfo.slug + " Coupons, Offers, Promo Codes & Coupons Codes " +getParsedDate() + " 2021"}/>
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
  
  const getStoreIdRes = await axios.get(`hhttps://ofccode-api.vercel.app/api/front/${params.slug}`);
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

