import React, { Component } from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <section id="footer" className="footer">
      <div className="container">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <h3 className="footer-logo-text">OffersCode<small>.In</small></h3>
              <p>
                OffersCode.in, one source for all things offers,
                deals and coupons. We’re dedicated to providing you the best of
                deals, with a focus on customer service.
              </p>
              <br />
              <ul className="list-unstyled list-inline social text-left">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/OffersCodeIn-106145641343042">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 quick-links-col">
            <h5>Popular Stores</h5>
            <ul className="list-unstyled quick-links">
              {/* <li className="nav-item">
                <i className="fas fa-angle-double-right"></i>
                <Link href="/store/amazon">
                  <a>paytmmall</a>
                </Link>
              </li>
              <li className="nav-item">
                <i className="fas fa-angle-double-right"></i>
                <Link href="/store/flipkart">
                  <a>Flipkart</a>
                </Link>
              </li>
              <li className="nav-item">
                <i className="fas fa-angle-double-right"></i>
                <Link href="/store/jabong">
                  <a>Jabong</a>
                </Link>
              </li> */}
              <li className="nav-item">
                <i className="fas fa-angle-double-right"></i>
                <Link href="/store/buywow">
                  <a>Wow</a>
                </Link>
              </li>
              <li className="nav-item">
                <i className="fas fa-angle-double-right"></i>
                <Link href="/store/firstcry">
                  <a>FirstCry</a>
                </Link>
              </li>
              <li className="nav-item">
                <i className="fas fa-angle-double-right"></i>
                <Link href="/store/boatlifestyle">
                  <a>Boat</a>
                </Link>
              </li>
              <li className="nav-item">
                <i className="fas fa-angle-double-right"></i>
                <Link href="/store/tatacliq">
                  <a>Tata Cliq</a>
                </Link>
              </li>
              {/* <li className="nav-item">
                <i className="fas fa-angle-double-right"></i>
                <Link href="/store/myntra">
                  <a>Myntra</a>
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              <li className="nav-item">
                <i className="fas fa-angle-double-right"></i>
                <Link href="/"> Home</Link>
              </li>
              <li className="nav-item">
                <i className="fas fa-angle-double-right"></i>
                <Link href="/about"> About</Link>
              </li>
              <li className="nav-item">
                <i className="fas fa-angle-double-right"></i>
                <Link href="/privacy"> Privacy</Link>
              </li>
              <li className="nav-item">
                <i className="fas fa-angle-double-right"></i>
                <Link href="/contact"> Contact</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
          <div className="col-md-12">
            <p className="h6">OffersCode<small>.In</small> © All right Reversed.</p>
          </div>
      </div>
    </section>
  );
};

export default Footer;
