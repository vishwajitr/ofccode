import React, { Component } from "react";
import { useRouter } from "next/router";
import GetServerSideProps from "next";
import NextPage from "next";
import Link from "next/link";
import axios from "axios";
import _ from "lodash";
import ProductsPageContent from "../components/ProductsPageContent";
var Papa = require("papaparse");
var slug = require('slug')


const FlipkartCategories = ({ flipkartCategories }) => {
 
return(

  <div>
      <ul>
        {Object.keys(flipkartCategories).map((value, index)=>(
            <li>  
            <h6>  
            <Link href={`categories/${flipkartCategories[index]['cat__name'].replace(" ", "-")}`} as={`categories/${flipkartCategories[index]['cat__name'].replace(" ", "-")}`}>
            <a target="_blank">
            {`${flipkartCategories[index]['cat__name']}`}
            </a>
            </Link>
            </h6>
            </li>
      ))}
      </ul>

  </div>
)
}




const CategoriesPage = (props) => {  
  return (
    <div>
      <FlipkartCategories flipkartCategories={props.getCategories} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  let response = await fetch(`http://140.238.244.200/directPartners/flipkart__offers?q=getCategoryFeed`);
  let getCategoriesData = await response.json();

  return {
    props: {
      getCategories: getCategoriesData.catData,
    },
  };
}

export default CategoriesPage;
