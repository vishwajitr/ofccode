import React, { Component, useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import _, { set } from "lodash";
import Moment from "moment";
import Link from "next/link";
import Image from 'next/image'

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
  
  // console.log(originalData);
  
  
  
  const [originalData, setOriginalData] = useState(props.cuelinksOffers);
  const [shuffledData, setShuffledData] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  
  useEffect(() => {
    
      // <!-- other head elements from your page -->
      
      const fetchData = async() => {
        // // Function to shuffle the array using Fisher-Yates algorithm
        const shuffleArray = (array) => {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
        };
        // // Create a copy of the original array and shuffle it
        // setOriginalData(props.cuelinksOffers)
        const newArray = props.cuelinksOffers;
        
        shuffleArray(newArray);
        // // Update the state with the shuffled array
        // alert(router.pathname == 'offers')
        if(router.pathname === '/offers'){
          
          setShuffledData(newArray)
        }else{
          // console.log(props.cuelinksOffers)
          // setShuffledData(props.cuelinksOffers)
        }
        
      }
      fetchData();
      // setOriginalData(props.cuelinksOffers)


      const AdsBlock = () => {
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
      }
      AdsBlock()
  }, [router.query]);
  
 
  // console.log(shuffledData);
  const cuelinksOffers = (shuffledData.length>0) ? shuffledData : props.cuelinksOffers
  
  
  
  const store__logo = props.storeInfo ? props.storeInfo.slug : {};
  const store__name = props.storeInfo ? props.storeInfo.name : {};
  const limit = props.limit ? props.limit : {};

  if (cuelinksOffers) {
    return (
      <section>
        

        <div className="clearfix">
          <div id="afscontainer1"></div>
          <br />
        
          <div className="clearfix">
            {_.map(cuelinksOffers, (value, key) => {
              // console.log(value)
              let promocodeCard = false;
              let cuelOffers = {};
              cuelOffers["title"] = value["title"];
              cuelOffers["merchant"] = value["merchant"];
              cuelOffers["slug"] = value["slug"];
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
              console.log(cuelOffers)

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
                                width="100"                              
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
                                href={"/product/" + cuelOffers["slug"]}
                                data-url={"/product/" + cuelOffers["slug"]}
                                data-promolink={"/product/" + cuelOffers["slug"]}
                                data-func="getPromoCode"
                                className="getPromoCode"
                                target="_blank"
                                title={
                                  `DealsTodayIndia.com - Promo code for ` +
                                  cuelOffers["campaign_name"] +
                                  ` deal ` +
                                  cuelOffers["title"]
                                }
                                rel="nofollow">

                                {cuelOffers["merchant"]}:{" "}
                                {cuelOffers["title"]}

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
                                  href={"/product/" + cuelOffers["slug"]}
                                  data-url={
                                    "/product/" + cuelOffers["slug"]
                                  }
                                  // data-promocode={''}
                                  // data-species={''}
                                  data-promolink={
                                    "/product/" + cuelOffers["slug"]
                                  }
                                  data-func="getPromoCode"
                                  className="getPromoCode"
                                  // data-website={''}
                                  target="_blank"
                                  title={
                                    `DealsTodayIndia.com - Promo code for ` +
                                    cuelOffers["campaign_name"] +
                                    ` deal ` +
                                    cuelOffers["title"]
                                  }
                                  rel="nofollow">
                                  
                                    Get This Deal
                                  
                                </Link>
                              </div>
                            ) : (
                              <div>
                                <Link
                                  href={"/product/" + slugify(cuelOffers["title"])}
                                  // href={`/goto`}
                                  data-url={
                                    "/product/" + slugify(cuelOffers["title"])
                                  }
                                  // data-promocode={}
                                  // data-species={}
                                  // data-promolink={}
                                  data-func="getDeal"
                                  className="getDeal"
                                  // data-website={}
                                  target="_blank"
                                  // gotoLink = {value[11]}
                                  rel="nofollow">
                                  
                                    Get This Deal
                                  
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
          <div id="afscontainer2"></div>
        </div>
      </section>
    );    
  }else {
    return (
      <div>
        <br />
        <br />
        <br />
        <h3>No New Deals Or Coupons Found</h3>
      </div>
    )
  }
  };

export default Card;
