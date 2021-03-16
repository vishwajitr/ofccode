import React, { Component } from "react";
import Link from "next/link";
import _ from 'lodash'
const TopKeywords = ({ keywordSet }) => {
  let Keywords = [];  
  Keywords = keywordSet;
  Keywords = (Keywords)?Keywords.slice(1, 10):[];
  if(Keywords){
  const LiElements = Keywords.map((keyword, index) => (
    <li className="storeCard-Col" key={index}>
        <Link href={`/${keyword.keyword_slug}`} as={`/${keyword.keyword_slug}`}>
            <a className="link">{keyword.keyword}</a>
        </Link>
    </li>
  ));
  return LiElements;
  }else{
    return '';
  }
};

const PopularKws  = (props) => {
    return (
      <div className="popularKws">
        <h4>Popular Keywords</h4>  
        <TopKeywords keywordSet={props.keywordSet}/>
      </div>
    );
}

export default PopularKws;