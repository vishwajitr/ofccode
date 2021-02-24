import React, { Component } from "react";
import _ from "lodash";
import Moment from "moment";

const getParsedDate = (date) => {
  return Moment(date).startOf("hour").fromNow();
}

const Card = (props) => {
  const couponsData = (props.couponsData1)? props.couponsData1.data: {};
    return (
      <section>
      <div className="clearfix">
      {_.map(couponsData, (value, key) => {
          // console.log(value);
          const discount = value[18];
          if (key > 0 && value[0] !== "") {
            return (
              <div key={key} className={key}>
                <div className="row">
                  <div className="deal__card">
                    <div className="deal__discount">
                      <div className="deal__info">
                        {discount ? (
                          <div>
                            <div className="deal__info-text">{discount}</div>
                            <div className="deal__info-subtext">Off</div>
                          </div>
                        ) : (
                          <div>{value[15]}</div>
                        )}
                      </div>
                    </div>
                    <div className="deal__desc">
                      <div className="deal__desc-type"></div>
                      <div className="deal__desc-title">
                        <h2>{value[1]}</h2>
                        {/* <p>{value[15]}</p> */}
                      </div>
                      <div className="deal__desc-meta">
                        <span className="deal__desc-meta-lastused">
                          Lasted Updated{" "}
                          <span>{getParsedDate(value[12])}</span>
                        </span>
                      </div>

                      <div className="deal__cta">
                        <a
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
                        </a>
                      </div>
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
