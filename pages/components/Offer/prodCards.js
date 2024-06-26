import React, { Component, useState, useEffect } from "react";
import _ from "lodash";
import Moment from "moment";
import Link from "next/link";
import Image from 'next/image'

var slug = require('slug')

const getParsedDate = (date) => {
  return Moment(date).startOf("hour").fromNow();
};

const Card = (props) => {
  const cuelinksOffers = props.cuelinksOffers ? props.cuelinksOffers : {};
  const store__logo = props.storeInfo ? props.storeInfo.slug : {};
  const store__name = props.storeInfo ? props.storeInfo.name : {};
  const limit = props.limit ? props.limit : {};

  if (cuelinksOffers) {
    return (
      <section>
        <div className="clearfix">
          {_.map(cuelinksOffers, (value, key) => {
            let promocodeCard = false;
            
            if (value[0] !== "") {
              if (value["Coupon_Code"] != "") {
                promocodeCard = true;
              }
              return (
                <div key={key} className={key}>
                  {console.log(value)}
                  <div className="row">
                    <div className="deal__card">
                      <div className="deal__discount">
                        <div className="deal__info">
                          <div>
                            <Image
                              src={value["Image_URL"]}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/img-notfound.jpg";
                              }}
                              alt={value["Title"]}
                              height="50"
                              width="100"
                            />{" "}
                          </div>
                        </div>
                      </div>
                      <div className="deal__desc">
                        <div className="deal__desc-type"></div>
                        <div className="deal__desc-title">
                          <h3>
                            <Link
                              href={value["URL"]}
                              data-url={value["URL"]}
                              data-promolink={value["URL"]}
                              data-func="getPromoCode"
                              className="getPromoCode"
                              target="_blank"
                              title={
                                `DealsTodayIndia.com - Promo code for ` +
                                value["Campaign_Name"] +
                                ` deal ` +
                                value["Title"]
                              }
                              rel="nofollow">

                              {value["Merchant"]}:{value["Title"]}

                            </Link>
                          </h3>
                        </div>
                        <div className="deal__desc-meta">
                          <span className="deal__desc-meta-lastused">
                            <i className="fa fa-users"></i>&nbsp;
                            <b>{Math.floor(Math.random() * 200) + 11}</b> People
                            Used Today
                          </span>
                          &nbsp;|&nbsp;
                          <span className="deal__desc-meta-lastused">
                            {value["Categories"]}
                          </span>
                        </div>

                        <div className="deal__cta">
                          
                            <div>
                              <Link
                                href={'product/'+slug(value["Title"])}
                                // href={`/goto`}
                                data-url={'product/'+slug(value["Title"])}
                                // data-promocode={}
                                // data-species={}
                                // data-promolink={}
                                data-func="getDeal"
                                className="getDeal"
                                // data-website={}
                                target="_blank"
                                // gotoLink = {value[11]}
                                rel="nofollow">
                                
                                  Get Deal
                                
                              </Link>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>
    );
  } else {
    return (
      <div>
        <br />
        <br />
        <br />
        <h3>No New Deals Or Coupons Found</h3>
      </div>
    );
  }
};

export default Card;
