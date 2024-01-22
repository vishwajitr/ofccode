import React, { useState, useEffect } from "react";
import Head from "next/head";
import TagManager from "react-gtm-module";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import "../styles/global.scss";
import "../styles/Layout.scss";

// import products from './products';
function MyApp({ Component, pageProps }) {
  // Similar to componentDidMount and componentDidUpdate:

  return (
    <div>
      <Head>
        <title>DealsTodayIndia.com | Coupons, Cashback, Offers and Promo Code</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_data/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_data/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_data/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon_data/site.webmanifest"/>
        <link rel="mask-icon" href="/favicon_data/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="google-site-verification" content="XaY_b8fNboGC8gxZhy-v9AD0fldBji5cNjI6FJDiFvI" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Coupons, Deals" />
        <meta
          name="description"
          content="Now SAVE MORE with DealsTodayIndia! Get the latest and up-to-date coupons, cashback offers on some of India’s top online shopping sites like Amazon, Paytm, Snapdeal, Flipkart, Myntra and many more at DealsTodayIndia.com."
        />
        <meta itemProp="url" name="url" content="https://DealsTodayIndia.com" />

        {/* <!-- Open Graph Meta tags --> */}
        <link rel="canonical" href="https://DealsTodayIndia.com/" />
        <link rel="canonical" href="https://DealsTodayIndia.com/" />
        <meta property="og:site_name" content="DealsTodayIndia.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DealsTodayIndia.com" />
        <meta property="og:url" content="https://DealsTodayIndia.com/" />
        <meta
          property="og:description"
          content="Now SAVE MORE with DealsTodayIndia! Get the latest and up-to-date coupons, cashback offers on some of India’s top online shopping sites like Amazon, Paytm, Snapdeal, Flipkart, Myntra and many more at DealsTodayIndia.com."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="logo.jpg" />
        <meta property="og:article:published_time" content="" />

        {/* <!-- twitter Meta tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Now SAVE MORE with DealsTodayIndia! Get the latest and up-to-date coupons, cashback offers on some of India’s top online shopping sites like Amazon, Paytm, Snapdeal, Flipkart, Myntra and many more at DealsTodayIndia.com."
        />
        <meta name="twitter:title" content="DealsTodayIndia.com" />
        <meta name="twitter:site" content="@dealstodayindia." />
        <meta name="twitter:creator" content="@dealstodayindia." />

        {/* <!-- Standard Meta tags --> */}
        <meta itemProp="name" content="DealsTodayIndia.com" />
        <meta
          itemProp="description"
          content="Now SAVE MORE with DealsTodayIndia! Get the latest and up-to-date coupons, cashback offers on some of India’s top online shopping sites like Amazon, Paytm, Snapdeal, Flipkart, Myntra and many more at DealsTodayIndia.com."
        />
        <meta itemProp="image" content="logo.jpg" />
        {/* meta tag for adsens */}
        <meta name="google-adsense-account" content="ca-pub-1481948700257830"/>

        <script
          data-ad-client="ca-pub-1481948700257830"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>       
            
        <script
          type="text/javascript"
          async
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WCB5B39D');`,
          }}
        />

      </Head>
      
      <Navbar />
      <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=<GTM ID>`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

      <div className="container main-container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
