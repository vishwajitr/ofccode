import Head from "next/head";
import Link from "next/link";
import Search from "../components/Search";
import axios from "axios";

const TopStores = ({ props }) => {
  // console.log(props);
  // return 'abc';
  const array = props;
  const LiElements = array.map((store, index) => (
    <li className="storeCard storeCard-small " key={index}>
      <Link href="/store/${store.slug}" as={`/store/${store.slug}`}>
        <a>
          <img src={`/stores__logo/${store.slug}-logo-large.jpg`} />
        </a>
      </Link>
      <Link href="/store/${store.slug}" as={`/store/${store.slug}`}>
        <h5>
          <a className="nav-link">{store.name}</a>
        </h5>
      </Link>
    </li>
  ));
  return LiElements;
};

const Stores = (props) => {
  return (
    <div className="container">
      <Head>
        <title>OffersCode.in: Coupons, Cashback, Offers and Promo Code</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Now SAVE MORE with OffersCode! Get the latest and up-to-date coupons & cashback offers on some of India’s top online shopping sites like Amazon, Paytm, Snapdeal, Flipkart, Myntra and many more at OffersCode.in."
        />
        <meta name="keywords" content="Coupons, Deals" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="OffersCode" />
        <meta itemProp="url" name="url" content="https://www.offersCode.in" />
      </Head>
      <div className="search__wrapper">
        <Search />
      </div>
      <div className="topStores__wrapper">
        <h3>
          Top Stores
        </h3>

        <TopStores props={props.storeInfo} />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const getStoreIdRes = await axios.get(`http://127.0.0.1:3000/api/front/`);
  // console.log(getStoreIdRes);
  return {
    props: {
      storeInfo: getStoreIdRes.data,
    },
  };
};

export default Stores;
