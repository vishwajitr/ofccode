import React, { Component, useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import _ from "lodash";
import Moment from "moment";
import Link from "next/link";
import Image from 'next/image'

const getParsedDate = (date) => {
  return Moment(date).startOf("hour").fromNow();
};

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
      adPage: 6,
      channel: "searchchnm",
    };

    var adblock1 = {
      container:"afscontainer1",
      linkTarget:"_blank",
      type:"ads",
      columns:1,
      horizontalAlignment:"left",
      resultsPageQueryParam:"query",
      styleId:"6940738649",
      adLoadedCallback:null
    };

    var adblock2 = {
      container:"afscontainer2",
      linkTarget:"_blank",
      type:"ads",
      columns:1,
      horizontalAlignment:"left",
      resultsPageQueryParam:"query",
      styleId:"6940738649",
      adLoadedCallback:null
    };

    _googCsa("ads", pageOptions, adblock1, adblock2);
  });

  const couponsData = props.couponsData1 ? props.couponsData1.data : {};
  const store__logo = props.storeInfo ? props.storeInfo.slug : {};
  const store__name = props.storeInfo ? props.storeInfo.formatted_name : {};

  if (couponsData.length > 2) {
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
        <div>
          <div className="clearfix">
            <div id="afscontainer1"></div>
            <br/>
            {_.map(couponsData, (value, key) => {
              // console.log(value);
              const discount = value[18];
              let promocodeCard = false;

              if (key > 0 && value[0] !== "") {
                if (value[8] == "promocode") {
                  promocodeCard = true;
                }
                return (
                  <div key={key} className={key}>
                    <div className="row">
                      <div className="deal__card">
                        <div className="deal__discount">
                          <div className="deal__info">
                            <div>
                              <Image
                                src={value[6]}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = "/img-notfound.jpg";
                                }}
                                alt={value[1]}
                                height="50"
                                width="100%"
                              />{" "}
                            </div>
                          </div>
                        </div>
                        <div className="deal__desc">
                          <div className="deal__desc-type"></div>
                          <div className="deal__desc-title">
                            <a
                              href={value[11]}
                              data-url={value[10]}
                              data-promocode={value[9]}
                              data-species={value[8]}
                              data-promolink={value[10]}
                              data-func="getPromoCode"
                              data-website={value[2]}
                              target="_blank"
                              title={
                                `OffersCode.in - Promo code for ` +
                                store__name +
                                ` deal ` +
                                value[1]
                              }
                              rel="nofollow"
                            >
                              <h3>{value[1]}</h3>
                            </a>
                          </div>
                          <div className="deal__desc-meta">
                            <span className="deal__desc-meta-lastused">
                              <i className="fa fa-users"></i>&nbsp;
                              <b>{Math.floor(Math.random() * 200) + 11}</b>{" "}
                              People Used Today
                            </span>
                            &nbsp;|&nbsp;
                            <span>{value[15]}</span>
                          </div>

                          <div className="deal__cta">
                            {promocodeCard ? (
                              <a
                                href={value[11]}
                                data-url={value[10]}
                                data-promocode={value[9]}
                                data-species={value[8]}
                                data-promolink={value[10]}
                                data-func="getPromoCode"
                                className="getPromoCode"
                                data-website={value[2]}
                                target="_blank"
                                title={
                                  `OffersCode.in - Promo code for ` +
                                  store__name +
                                  ` deal ` +
                                  value[1]
                                }
                                rel="nofollow"
                              >
                                {value[9]}
                              </a>
                            ) : (
                              <div>
                                <Link href={value[11]}>
                                  <a
                                    // href={`/goto`}
                                    data-url={value[10]}
                                    data-promocode={value[9]}
                                    data-species={value[8]}
                                    data-promolink={value[10]}
                                    data-func="getDeal"
                                    className="getDeal"
                                    data-website={value[2]}
                                    target="_blank"
                                    // gotoLink = {value[11]}
                                    rel="nofollow"
                                  >
                                    Get Deal
                                  </a>
                                </Link>
                              </div>
                            )}
                            <span className="deal__cta-meta">
                              {value[13] !== "None"
                                ? "Expiring In " + getParsedDate(value[13])
                                : ""}
                            </span>
                          </div>
                          {/* <a
                         href={value[11]}
                          data-url={value[10]}
                          data-promocode={value[9]}
                          data-species={value[8]}
                          data-promolink={value[10]}
                          data-func="showDeal"
                          data-website={value[2]}
                          target="_blank"
                        >
                          Get Deal
                        </a> */}

                          {/* <div>{value[4]}</div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}

            <div id="afscontainer2"></div>
           
          </div>
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
