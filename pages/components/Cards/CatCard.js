import React, { Component, useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import _ from "lodash";
import Moment from "moment";
import Link from "next/link";
var slug = require('slug')
const CatCard = (props) => {
  const products = props.products ? props.products : {};

  if (products) {
    return (
      <section>
        <div className="clearfix">
          <ul className="FlipkartCPProd_Ul">
            {Object.keys(products).map((value, index) => (
                <li className="CpCard-Col" key={index}>
                  <div className="CpCard CpCard-small">
                    <Link
                      href={`${products[value].url}`}
                      as={`${products[value].url}`}
                    >
                      <a target="_blank">
                        <img
                          src={`${products[value]["image_url"]}`}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/img-notfound.jpg";
                          }}
                          
                        />
                      </a>
                    </Link>
                  </div>
                  
                  <h5>
                      <Link
                        href={`/product/${slug(products[value].url)}`}
                        as={`/product/${slug(products[value].url)}`}
                      >
                        <a target="_blank">{products[value].title}</a>
                      </Link>
                    </h5>
                </li>
              
            ))}
          </ul>
        </div>
      </section>
    );
  } else {
    return <div></div>;
  }
};

export default CatCard;
