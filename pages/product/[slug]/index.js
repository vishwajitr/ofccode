import React, { Component } from "react";
import { useRouter } from "next/router";
import GetServerSideProps from "next";
import NextPage from "next";
import Link from "next/link";
import axios from "axios";
import _ from "lodash";
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
  <div className="prodCard">
  <div className="prodCard__image">
    <img src={props.results.image_url}/>
  </div>
  <div className="prodCard__field prodCard__name">{props.results.title}</div>
  <div className="prodCard__field prodCard__cat">Categories: {props.results.categories}</div>
  <div className="prodCard__field prodCard__brand">Brand: {props.results.merchant}</div>
  <div className="prodCard__field prodCard__desc">Description: {props.results.description}</div>
  <div className="prodCard__field prodCard__couponcode">Coupon_Code: {props.results.coupon_code}</div>
  <div className="prodCard__field prodCard__buybtn"><a href={props.results.url} target="_blank">Buy Now</a> </div>
  </div>
  </div>;
};

export async function getServerSideProps({ params }) {
  const Slug = params.slug;
    const res = await fetch(`https://ofccode-api-sportybruh1990.vercel.app/api/front/offers/prod__by__slug?q=${Slug}`)
    const json = await res.json()
    console.log(json)
    
    return { 
      props: {
        results: json.results[0],
      },
    };
  }
  

export default ProductPage;
