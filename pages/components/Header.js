import React, { Component } from "react";
import Link from "next/link";
import Search from "../search/searchBoxKws";

const HeaderList = () => {



  const HeaderLinks = [
    // {
    //   label: "Wow",
    //   path: "/store/buywow",
    // },
    // {
    //   label: "FirstCry",
    //   path: "/store/firstcry",
    // },
    // {
    //   label: "Boat",
    //   path: "/store/boat-lifestyle",
    // },
    // {
    //   label: "Tata Cliq",
    //   path: "/store/tatacliq",
    // },
    {
      label: "Amazon",
      path: "/store/amazon",
    },
    {
      label: "Flipkart",
      path: "/store/flipkart",
    },
    {
      label: "Myntra",
      path: "/store/myntra",
    },
    {
      label: "Ajio",
      path: "/store/ajio",
    },
    {
      label: "Hot Offers",
      path: "/offers",
    },
  ];

  const array = HeaderLinks;
  const LiElements = array.map((list, index) => (
    <li className="nav-item" key={index}>
      <Link href={list.path}>
        <a className="nav-link">{list.label}</a>
      </Link> 
    </li>
  ));
  return LiElements;
};


const Header = () => {

  
  function toggleNav1(e){
    e.preventDefault;
    document.querySelector('#headerNav1').classList.toggle('collapse');
  }

  function toggleNav2(e){
    e.preventDefault;
    document.querySelector('#headerNav2').classList.toggle('collapse');
  }


  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">DealsTodayIndia<small>.Com</small></a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample07"
            aria-controls="navbarsExample07"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNav1}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="headerNav1">
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
            <div className="form-inline my-2 my-md-0 headerSearch"> 
            <Search />
            </div>           
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light rounded">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample10"
            aria-controls="navbarsExample10"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNav2}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse"  id="headerNav2">
            <ul className="navbar-nav">
            <HeaderList/>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
