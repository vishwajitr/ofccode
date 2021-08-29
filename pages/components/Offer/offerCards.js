import React, { Component, useState, useEffect } from "react";
import _ from "lodash";
import Moment from "moment";
import Link from "next/link";
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
            let cuelOffers = {}
            cuelOffers['title'] = value['title'];
            cuelOffers['merchant'] = value['merchant'];
            cuelOffers['id'] = value['id'];
            cuelOffers['categories'] = value['categories'];
            cuelOffers['description'] = value['description'];
            cuelOffers['coupon_code'] = value['coupon_code'];
            cuelOffers['url'] = value['url'];
            cuelOffers['start_date'] = value['start_date'];
            cuelOffers['end_date'] = value['end_date'];
            cuelOffers['offer_added_at'] = value['offer_added_at'];
            cuelOffers['image_url'] = value['image_url'];
            cuelOffers['campaign_name'] = value['campaign_name'];

            if (value['title'] !== "") {
              if (cuelOffers['coupon_code'] != "") {
                promocodeCard = true;
              }
              return (
                <div key={key} className={key}>
                  <div className="row">
                    <div className="deal__card">
                      <div className="deal__discount">
                        <div className="deal__info">
                          <div>
                            <img
                              src={cuelOffers['image_url']}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/img-notfound.jpg";
                              }}
                              alt={cuelOffers['title']}
                            />{" "}
                          </div>
                        </div>
                      </div>
                      <div className="deal__desc">
                        <div className="deal__desc-type"></div>
                        <div className="deal__desc-title">
                          <h3>
                            <Link href={'/product/'+slug(cuelOffers['title'])}>
                              <a
                                data-url={'/product/'+slug(cuelOffers['title'])}
                                data-promolink={'/product/'+slug(cuelOffers['title'])}
                                data-func="getPromoCode"
                                className="getPromoCode"
                                target="_blank"
                                title={
                                  `OffersCode.in - Promo code for ` +
                                  cuelOffers['campaign_name'] +
                                  ` deal ` +
                                  cuelOffers['title']
                                }
                                rel="nofollow"
                              >
                                {cuelOffers['merchant']} : {cuelOffers['title']}
                              </a>
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
                            {cuelOffers['categories']}
                          </span>
                        </div>

                        <div className="deal__cta">
                          {promocodeCard ? (
                            <div>
                              <Link href={'/product/'+slug(cuelOffers['title'])}>
                                <a
                                  data-url={'/product/'+slug(cuelOffers['title'])}
                                  // data-promocode={''}
                                  // data-species={''}
                                  data-promolink={'/product/'+slug(cuelOffers['title'])}
                                  data-func="getPromoCode"
                                  className="getPromoCode"
                                  // data-website={''}
                                  target="_blank"
                                  title={
                                    `OffersCode.in - Promo code for ` +
                                    cuelOffers['campaign_name'] +
                                    ` deal ` +
                                    cuelOffers['title']
                                  }
                                  rel="nofollow"
                                >
                                  {cuelOffers['coupon_code']}
                                </a>
                              </Link>
                            </div>
                          ) : (
                            <div>
                              <Link href={'/product/'+slug(cuelOffers['title'])}>
                                <a
                                  // href={`/goto`}
                                  data-url={'/product/'+slug(cuelOffers['title'])}
                                  // data-promocode={}
                                  // data-species={}
                                  // data-promolink={}
                                  data-func="getDeal"
                                  className="getDeal"
                                  // data-website={}
                                  target="_blank"
                                  // gotoLink = {value[11]}
                                  rel="nofollow"
                                >
                                  Get Deal
                                </a>
                              </Link>
                            </div>
                          )}
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
