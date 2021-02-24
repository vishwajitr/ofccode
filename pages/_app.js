import Head from "next/head";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import "../styles/global.scss";
import "../styles/Layout.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>OffersCode.in: Coupons, Cashback, Offers and Promo Code</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Now SAVE MORE with OffersCode! Get the latest and up-to-date coupons, cashback offers on some of India’s top online shopping sites like Amazon, Paytm, Snapdeal, Flipkart, Myntra and many more at OffersCode.in."
        />
        <meta name="keywords" content="Coupons, Deals" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="OffersCode" />
        <meta itemProp="url" name="url" content="https://www.offersCode.in" />
        <script>
            window.ao_subid = "moneylink";
        </script>
        <script src="//js.mamydirect.com/js/?h=j528d0OH" type="text/javascript" async></script>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RVN1V7NSW4"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RVN1V7NSW4');
        </script>
      </Head>
      <Navbar />
      <div className="container main-container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
