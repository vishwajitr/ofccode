import React, { Component } from "react";
import Link from "next/link";
import Search from "./Search";
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">OffersCode<small>.In</small></a>
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample07"
            aria-controls="navbarsExample07"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/privacy">
                  <a className="nav-link">Privacy</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link href="/Stores">
                  <a className="nav-link">Stores</a>
                </Link>
              </li> */}
            </ul>           
            <div className="form-inline my-2 my-md-0 headerSearch"> <Search /></div>           
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light rounded">
        <div className="container">
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample10"
            aria-controls="navbarsExample10"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div className="collapse navbar-collapse" id="navbarsExample10">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <Link href="/store/amazon">
                  <a className="nav-link">Amazon</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/store/flipkart">
                  <a className="nav-link">Flipkart</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/store/jabong">
                  <a className="nav-link">Jabong</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/store/tatacliq">
                  <a className="nav-link">Tata Cliq</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/store/myntra">
                  <a className="nav-link">Myntra</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/store/bangood" id="13624">
                  <a className="nav-link">Bangood</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/store/2gud" id="13624">
                  <a className="nav-link">2Gud</a>
                </Link>
              </li> */}



              <li className="nav-item">
                <Link href="/store/paytmmall">
                  <a className="nav-link">PaytmMall</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/store/firstcry">
                  <a className="nav-link">FirstCry</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/store/boatlifestyle">
                  <a className="nav-link">Boat</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/store/tatacliq">
                  <a className="nav-link">Tata Cliq</a>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link href="/store/myntra">
                  <a className="nav-link">Myntra</a>
                </Link>
              </li> */}

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
