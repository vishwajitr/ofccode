import React, { Component,useState, useEffect } from "react";
import _ from "lodash";
import Moment from "moment";
import Link from "next/link";


const getParsedDate = (date) => {
  return Moment(date).startOf("hour").fromNow();
}

const Card = (props) => {
  const couponsData = (props.couponsData1)? props.couponsData1.data: {};
  const store__logo = (props.storeInfo)? props.storeInfo.slug: {};
  const store__name = (props.storeInfo)? props.storeInfo.name: {};
    return (
      <section>
      <div className="clearfix">
      {_.map(couponsData, (value, key) => {
          // console.log(value);
          const discount = value[18];
          let promocodeCard = false;
          
          if (key > 0 && value[0] !== "") {
            if(value[8] == 'promocode'){
              promocodeCard = true;
            }
            return (
              <div key={key} className={key}>
                <div className="row">
                  <div className="deal__card">
                    <div className="deal__discount">
                      <div className="deal__info">
                      <div><img src={`/stores__logo/${(props.storeInfo)? props.storeInfo.slug : ""}-logo-small.jpg`} alt={value[1]}/>  </div>                        
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
                           title={`OffersCode.in - Promo code for `+ store__name +` deal `+value[1]}
                           rel="nofollow"
                         >
                           <h3>{value[1]}</h3>
                         </a>                        
                      </div>
                      <div className="deal__desc-meta">
                        <span className="deal__desc-meta-lastused">   
                        <i className="fa fa-users"></i>&nbsp;<b>{Math.floor(Math.random() * 200) + 11  }</b> People Used Today   
                        </span>&nbsp;|&nbsp;
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
                           title={`OffersCode.in - Promo code for `+ store__name +` deal `+value[1]}
                           rel="nofollow"
                         >
                           {value[9]}
                         </a>
                          ) : (
                            <div>
                              <Link
                              href={value[11]}                               
                              >
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
                        {(value[13]!=='None') ? 'Expiring In '+ getParsedDate(value[13]) : '' }  
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
      </div>
      </section>
    );
}

export default Card;
