import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Head from "next/head";

function Serach({ Component, pageProps }) {

    const router = useRouter()
    const { slug } = router.query
    

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
      query: "amazon",
      adPage: 5,
      channel: "searchchnm",
    };

    var adblock1 = {
      container: "afscontainer1",
      width: "700",
      maxTop: 2,
      fontFamily: "times new roman",
      fontSizeTitle: 16,
      colorTitleLink: "FE6751",
      colorBackground: "fe6751",
      detailedAttribution: false,
    };

    var adblock2 = {
      container: "afscontainer2",
      width: "700",
      number: 2,
      fontFamily: "times new roman",
      colorTitleLink: "FE6751",
      detailedAttribution: false,
    };

    _googCsa("ads", pageOptions, adblock1, adblock2);
  });

  return (
    <div>
      <Head>
        <script async="async" src="https://www.google.com/adsense/search/ads.js"></script>
        <script async src="https://cse.google.com/cse.js?cx=39bed8f3de88a4885"></script>
      </Head>
      <div id="afscontainer1"></div>
      <div className="gcse-search"></div>
      <div className="gcse-searchresults"></div>
      <div id="afscontainer2"></div>
    </div>
  );
}

export default Serach;
