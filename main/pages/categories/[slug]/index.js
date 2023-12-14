import React, { Component } from "react";
import _ from "lodash";
import CatCard from "../../components/Cards/CatCard";

  
const CatSinglePage = (props) => {
  return (
    <div>
        <CatCard {...props}/>
     </div>
  );
};

export async function getServerSideProps({ params }) {
  let cat__name = params.slug;
  cat__name = cat__name.replace("-", "_")
  const response = await fetch(
    `http://140.238.244.200/directPartners/flipkart__offers?q=getCategoryFeed&catName=${cat__name}`
  );
  let getCatInfo = await response.json();

  let resourceName = getCatInfo['catData']['availableVariants']['v1.1.0']['resourceName']
  let ProdURL = getCatInfo['catData']['availableVariants']['v1.1.0']['get']
//   console.log(resourceName);
//   console.log(ProdURL);

  const responseProd = await fetch(
    `http://140.238.244.200/directPartners/flipkart__offers?q=getProductsFeed&resourceName=${resourceName}&catName=${cat__name}`
  );
  let responseProdData = await responseProd.json();


  
  return {
    props: {
        getCatInfo: getCatInfo,
        products: responseProdData
    },
  };
}

export default CatSinglePage;
