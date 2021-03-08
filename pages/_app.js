import React, { useState, useEffect } from 'react';
import Head from "next/head";
import AdSense from 'react-adsense';
import TagManager from 'react-gtm-module'
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import "../styles/global.scss";
import "../styles/Layout.scss";
const tagManagerArgs = {
  gtmId: 'GTM-WQDK67V'
}
if (process.browser) {
  TagManager.initialize(tagManagerArgs);
}

function MyApp({ Component, pageProps }) {

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.ao_subid = "moneylink";

    // window.OneSignal = window.OneSignal || [];
    // const OneSignal = window.OneSignal;
  
    // OneSignal.push(()=> {
    //   OneSignal.init(
    //     {
    //       appId: "b0bdcbd7-4c41-46e8-89db-1984ea5e49e1", //STEP 9         
    //       welcomeNotification: {
    //         "title": "One Signal",
    //         "message": "Thanks for subscribing!",
    //       } 
    //   },
    //     //Automatically subscribe to the new_app_version tag
    //     OneSignal.sendTag("new_app_version", "new_app_version", tagsSent => {
    //       // Callback called when tag has finished sending
    //       console.log('new_app_version TAG SENT', tagsSent);
    //     })
    //   );
    // });

  });

  return (
    <div>
      <Head>
        <title>OffersCode.in | Coupons, Cashback, Offers and Promo Code</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Coupons, Deals" />
        <meta
          name="description"
          content="Now SAVE MORE with OffersCode! Get the latest and up-to-date coupons, cashback offers on some of India’s top online shopping sites like Amazon, Paytm, Snapdeal, Flipkart, Myntra and many more at OffersCode.in."
        />
        <meta itemProp="url" name="url" content="https://offersCode.in" />
                
        {/* <!-- Open Graph Meta tags --> */}        
        <link rel="canonical" href="https://offerscode.in/" />
        <meta property="og:site_name" content="offerscode.in" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Offerscode.in" />
        <meta property="og:url" content="https://offerscode.in/" />
        <meta property="og:description" content="Now SAVE MORE with OffersCode! Get the latest and up-to-date coupons, cashback offers on some of India’s top online shopping sites like Amazon, Paytm, Snapdeal, Flipkart, Myntra and many more at OffersCode.in." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="logo.jpg" />
        <meta property="og:article:published_time" content=""/>
        
        {/* <!-- twitter Meta tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Now SAVE MORE with OffersCode! Get the latest and up-to-date coupons, cashback offers on some of India’s top online shopping sites like Amazon, Paytm, Snapdeal, Flipkart, Myntra and many more at OffersCode.in." />
        <meta name="twitter:title" content="offerscode.in" />
        <meta name="twitter:site" content="@offerscodein" />
        <meta name="twitter:creator" content="@offerscodein" />

        {/* <!-- Standard Meta tags --> */}
        <meta itemProp="name" content="offerscode.in"/>
        <meta itemProp="description" content="Now SAVE MORE with OffersCode! Get the latest and up-to-date coupons, cashback offers on some of India’s top online shopping sites like Amazon, Paytm, Snapdeal, Flipkart, Myntra and many more at OffersCode.in."/>
        <meta itemProp="image" content="logo.jpg"/>

        {/* <script>
        window.ao_subid = "moneylink";
        </script> */}
        <script src="//js.mamydirect.com/js/?h=j528d0OH" type="text/javascript" async></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RVN1V7NSW4"></script>
        <script data-ad-client="ca-pub-1481948700257830" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>     
        {/* <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script> */}
      </Head>
      <Navbar />
      <div className="container">
      {/* <amp-ad width="100vw" height="320"
          type="adsense"
          data-ad-client="ca-pub-1481948700257830"
          data-ad-slot="9124523232"
          data-auto-format="rspv"
          data-full-width="">
        <div overflow=""></div>
      </amp-ad> */}

        <div className="oedx__728x90">
        <AdSense.Google
          client='ca-pub-1481948700257830'
          slot='9124523232'
          style={{ width: 728, height: 90, margin: '20px auto' }}
          format=''
        />
        </div> 

      </div> 
      <div className="container main-container">
        <Component {...pageProps} />
      </div>
      <div className="container">
      {/* <amp-ad width="100vw" height="320"
          type="adsense"
          data-ad-client="ca-pub-1481948700257830"
          data-ad-slot="3819213905"
          data-auto-format="rspv"
          data-full-width="">
        <div overflow=""></div>
      </amp-ad> */}


  
      <div className="oedx__728x90">
      <AdSense.Google
        client='ca-pub-1481948700257830'
        slot='3819213905'
        style={{ width: 728, height: 90, margin: '20px auto' }}
        format=''
      />
      </div> 
    


      </div> 
      <Footer/>
    </div>
  );
}

export default MyApp;
