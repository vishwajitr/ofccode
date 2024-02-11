import React, { Component } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import GetServerSideProps from "next";
import NextPage from "next";
import Link from "next/link";
import axios from "axios";
import _, { head } from "lodash";
import Image from 'next/image'

// import OffersPageContent from "../components/OffersPageContent";
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

const ProductPage = (props) => {

return <div className="ProdPage">
<Head>
<link rel="canonical" href={props.prod__url} />
<meta property="og:site_name" content="DealsTodayIndia.com" />
<meta property="og:type" content="website" />
<meta property="og:title" content="DealsTodayIndia.com" />
<meta property="og:url" content={props.prod__url} />
<meta
  property="og:description"
  content={props.results.title}
/>
<meta property="og:locale" content="en_US" />
<meta property="og:image" content={props.results.image_url} />
<meta property="og:article:published_time" content="" />

{/* <!-- twitter Meta tags --> */}
<meta name="twitter:card" content="summary_large_image" />
<meta
  name="twitter:description"
  content={props.results.title}
/>
<meta name="twitter:title" content="DealsTodayIndia.com" />
<meta name="twitter:site" content="@dealstodayindia." />
<meta name="twitter:creator" content="@dealstodayindia." />

{/* <!-- Standard Meta tags --> */}
<meta itemProp="name" content="DealsTodayIndia.com" />
<meta
  itemProp="description"
  content={props.results.title}
/>
<meta itemProp="image" content={props.results.image_url} />


</Head>   
  <div className="prodCard">
  <a href={props.results.link} target="_blank">  
  <div className="prodCard__image">
  <Image src={
  `/stores__logo/` +
  props.results.merchant +
  `-logo-large.jpg`
  }
  height="80"
  width="100%"
  />
  </div>
  </a>
  <div className="prodCard__field prodCard__name">{props.results.title}</div>
  {/* <div className="prodCard__field prodCard__cat">Categories: {props.results.categories}</div> */}
  <div className="prodCard__field prodCard__brand">Brand: {props.results.merchant}</div>
  <div className="prodCard__field prodCard__desc">Description: {props.results.description}</div>
  {/* <div className="prodCard__field prodCard__couponcode">Coupon_Code: {props.results.coupon_code}</div> */}
  <div className="prodCard__field prodCard__buybtn"><a href={props.results.link} target="_blank">Buy Now</a> </div>
  </div>
  </div>;
};

export async function getServerSideProps({ params }) {
  const Slug = params.slug;
  // console.log(params)
    const res = await fetch(`http://ofccode-api-git-main-sportybruh1990.vercel.app/search/prod__by__slug?q=${Slug}`)
    const json = await res.json()
    let jsonData = json.results[0]
    // console.log(json)
    
    return { 
      props: {
        results: jsonData ? jsonData : [],
        prod__url : '//DealsTodayIndia.com/product/' +params.slug
      },
    };
  }
  

export default ProductPage;
