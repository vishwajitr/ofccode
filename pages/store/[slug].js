import React, { Component } from "react";
import axios from 'axios';
import _ from "lodash";
var Papa = require("papaparse");
import { useRouter } from 'next/router';
import Content from "../components/Content";


const StorePage =  (props) => {
const router = useRouter()
  // const { slug } = router.query

  return (
    <div>     
    <Content {...props} headerTag1={"Coupons and Promo Code : " + props.storeInfo.slug}/>
    </div>
  );   
}

export async function getStaticPaths() {
  const res = await axios.get('http://127.0.0.1:3000/api/front');
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
  
  const getStoreIdRes = await axios.get(`http://127.0.0.1:3000/api/front/${params.slug}`);
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

