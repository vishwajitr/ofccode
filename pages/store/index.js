import Head from "next/head";
import Link from "next/link";
import Search from "../search/searchBox";
import TopStores from "../components/Store/topStores";
import axios from "axios";
import _ from "lodash";

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
        <h3>Top Stores</h3>

        <ul className="topStores__Ul">
          <TopStores storeInfo={props.storeInfo} />
        </ul>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  let response = await fetch(`https://ofccode-api-jd5rsee48-sportybruh1990.vercel.app/api/front/stores`);
  let getStoreIdRes = await response.json();
  let selectedStoresArr = [
    15481,
    15542,
    14719,
    23961,
    23825,
    15591,
    14291,
    21361,
    22998,
    23433,
    22012,
  ];
  let FinalData = [];
  var selectedStores = _.map(selectedStoresArr, function (storeId, Index) {
    let filteredData = getStoreIdRes.filter(
      (store) => store.affInfo__StoreId == storeId
    );
    FinalData[Index] = filteredData[0];
  });

  getStoreIdRes = FinalData.filter((store) => store.site__StoreEnabled == 1);

  let clinksRes = await fetch(`https://ofccode-api-jd5rsee48-sportybruh1990.vercel.app/api/front/cuels/offers`);
  let cuelinksOffers = await clinksRes.json();

  return {
    props: {
      storeInfo: getStoreIdRes,
      cuelinksOffers: cuelinksOffers,
    },
  };
};

export default Stores;
