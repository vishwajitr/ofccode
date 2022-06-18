import React, { Component, useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import _ from "lodash";
import Moment from "moment";
import Link from "next/link";
import Image from 'next/image'

var SlugURL = require("slug");

const getParsedDate = (date) => {
  return Moment(date).startOf("hour").fromNow();
};

// const clickUrl = (target) => {
//   // http://localhost:3000/offers
//     if (typeof window !== "undefined") {
//     window.location.href = target;
//     }
// };

const Card = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // <!-- other head elements from your page -->

    (function (g, o) {
      (g[o] =
        g[o] ||
        function () {
          (g[o]["q"] = g[o]["q"] || []).push(arguments);
        }),
        (g[o]["t"] = 1 * new Date());
    })(window, "_googCsa");

    var pageOptions = {
      pubId: "pub-9616389000213823", // Make sure this the correct client ID!
      query: slug,
      adPage: 10,
      channel: "searchchnm",
    };

    var adblock1 = {
      container: "afscontainer1",
      linkTarget: "_blank",
      type: "ads",
      columns: 1,
      horizontalAlignment: "left",
      resultsPageQueryParam: "query",
      styleId: "6940738649",
      adLoadedCallback: null,
    };

    var adblock2 = {
      container: "afscontainer2",
      linkTarget: "_blank",
      type: "ads",
      columns: 1,
      horizontalAlignment: "left",
      resultsPageQueryParam: "query",
      styleId: "6940738649",
      adLoadedCallback: null,
    };

    _googCsa("ads", pageOptions, adblock1, adblock2);
  });

  const cuelinksOffers = props.cuelinksOffers ? props.cuelinksOffers : {};
  const store__logo = props.storeInfo ? props.storeInfo.slug : {};
  const store__name = props.storeInfo ? props.storeInfo.name : {};
  const limit = props.limit ? props.limit : {};

  if (cuelinksOffers) {
    return (
      <section>
        <Head>
          <script
            async="async"
            src="https://www.google.com/adsense/search/ads.js"
          ></script>
          <script
            async
            src="https://cse.google.com/cse.js?cx=39bed8f3de88a4885"
          ></script>
        </Head>

        <div className="clearfix">
          <div id="afscontainer1"></div>
          <br />

          <div className="clearfix">
            {_.map(cuelinksOffers, (value, key) => {
              let promocodeCard = false;
              let cuelOffers = {};
              cuelOffers["title"] = value["title"];
              cuelOffers["merchant"] = value["merchant"];
              cuelOffers["id"] = value["id"];
              cuelOffers["categories"] = value["categories"];
              cuelOffers["description"] = value["description"];
              cuelOffers["coupon_code"] = value["coupon_code"];
              cuelOffers["url"] = value["url"];
              cuelOffers["start_date"] = value["start_date"];
              cuelOffers["end_date"] = value["end_date"];
              cuelOffers["offer_added_at"] = value["offer_added_at"];
              cuelOffers["image_url"] = value["image_url"];
              cuelOffers["campaign_name"] = value["campaign_name"];

              if (value["title"] !== "") {
                if (cuelOffers["coupon_code"] != "") {
                  promocodeCard = true;
                }
                return (
                  <div key={key} className={key}>
                    <div className="clearfix">
                      <div className="deal__card">
                        <div className="deal__discount">
                          <div className="deal__info">
                            <div>
                              <Image
                                src={
                                  `/stores__logo/` +
                                  cuelOffers["merchant"] +
                                  `-logo-small.jpg`
                                }
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = "/img-notfound.jpg";
                                }}
                                height="50"
                                width="100%"                              
                                alt={cuelOffers["title"]}
                              />{" "}
                            </div>
                          </div>
                        </div>
                        <div className="deal__desc">
                          <div className="deal__desc-type"></div>
                          <div className="deal__desc-title">
                            <h3>
                              <Link
                                href={"/product/" + SlugURL(cuelOffers["title"])}
                              >
                                <a
                                  data-url={
                                    "/product/" + SlugURL(cuelOffers["title"])
                                  }
                                  data-promolink={
                                    "/product/" + SlugURL(cuelOffers["title"])
                                  }
                                  data-func="getPromoCode"
                                  className="getPromoCode"
                                  target="_blank"
                                  title={
                                    `OffersCode.in - Promo code for ` +
                                    cuelOffers["campaign_name"] +
                                    ` deal ` +
                                    cuelOffers["title"]
                                  }
                                  rel="nofollow"
                                >
                                  {cuelOffers["merchant"]} :{" "}
                                  {cuelOffers["title"]}
                                </a>
                              </Link>
                            </h3>
                          </div>
                          <div className="deal__desc-meta">
                            <span className="deal__desc-meta-lastused">
                              <i className="fa fa-users"></i>&nbsp;
                              <b>{Math.floor(Math.random() * 200) + 11}</b>{" "}
                              People Used Today
                            </span>
                            &nbsp;|&nbsp;
                            <span className="deal__desc-meta-lastused">
                              {cuelOffers["categories"]}
                            </span>
                          </div>

                          <div className="deal__cta">
                            {promocodeCard ? (
                              <div>
                                <Link
                                  href={"/product/" + SlugURL(cuelOffers["title"])}
                                >
                                  <a
                                    data-url={
                                      "/product/" + SlugURL(cuelOffers["title"])
                                    }
                                    // data-promocode={''}
                                    // data-species={''}
                                    data-promolink={
                                      "/product/" + SlugURL(cuelOffers["title"])
                                    }
                                    data-func="getPromoCode"
                                    className="getPromoCode"
                                    // data-website={''}
                                    target="_blank"
                                    title={
                                      `OffersCode.in - Promo code for ` +
                                      cuelOffers["campaign_name"] +
                                      ` deal ` +
                                      cuelOffers["title"]
                                    }
                                    rel="nofollow"
                                  >
                                    Get This Deal
                                  </a>
                                </Link>
                              </div>
                            ) : (
                              <div>
                                <Link
                                  href={"/product/" + SlugURL(cuelOffers["title"])}
                                >
                                  <a
                                    // href={`/goto`}
                                    data-url={
                                      "/product/" + SlugURL(cuelOffers["title"])
                                    }
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
                                    Get This Deal
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
          <br />
          <div id="afscontainer1"></div>
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
