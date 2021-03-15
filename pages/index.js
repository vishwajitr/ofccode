import axios from "axios";
import Search from "./search/searchBox";
import TopStores from "./components/Store/topStores";
import OffersPageContent from "./components/OffersPageContent";
import _ from "lodash";
import Link from "next/link";

const FlipkartOffers = ({ flipkartOffers }) => {
  let flipkartOffersArr = [];
  flipkartOffersArr = flipkartOffers;
  if (flipkartOffersArr) {
    const LiElements = flipkartOffersArr.map((offer, index) => (
      <li className="offerCard-Col" key={index}>
        <div className="offerCard offerCard-small">
          <Link href="${offer.url}" as={`${offer.url}`}>
            <a>
              <img
                src={`${offer.imageUrls[0].url}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img-notfound.jpg";
                }}
              />
            </a>
          </Link>
        </div>
        <h5>
          <Link href={offer.url} as={offer.url}>
            <a className="" target="_blank" rel="nofollow">
              {offer.title}
            </a>
          </Link>
        </h5>
        <p> {offer.name}</p>
      </li>
    ));
    return LiElements;
  } else {
    return "";
  }
};



const FlipkartFlashOffers = ({ flipkartFlashOffers }) => {
  let flipkartOffersArr = [];
  flipkartOffersArr = flipkartFlashOffers;
  if (flipkartOffersArr) {
    const LiElements = flipkartOffersArr.map((offer, index) => (
      <li className="offerCard-Col" key={index}>
        <div className="offerCard offerCard-small">
          <Link href="${offer.url}" as={`${offer.url}`}>
            <a>
              <img
                src={`${offer.imageUrls[0].url}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img-notfound.jpg";
                }}
              />
            </a>
          </Link>
        </div>
        <h5>
          <Link href={offer.url} as={offer.url}>
            <a className="" target="_blank" rel="nofollow">
              {offer.title}
            </a>
          </Link>
        </h5>
        <p> {offer.name}</p>
      </li>
    ));
    return LiElements;
  } else {
    return "";
  }
};

const Index = (props) => {
  return (
    <div className="container">
      <div className="search__wrapper">
        <Search />
      </div>
      
      <h3>Flipkart Live Offers</h3>
      <ul className="FlipkartOffers_Ul">
        <FlipkartOffers flipkartOffers={props.flipkartOffers} />
      </ul>

      <h3>Flipkart Deal Of The Day Offers (Flash Offers)</h3>
      <ul className="FlipkartOffers_Ul">
        <FlipkartFlashOffers flipkartFlashOffers={props.flipkartFlashOffers} />
      </ul>

      <div className="topStores__wrapper">
        <h3>Top Stores</h3>
        <ul className="topStores__Ul">
          <TopStores storeInfo={props.storeInfo} />
        </ul>
        <br />
        <br />
      </div>
      

      {/* <h3>Trending Offers</h3> */}
      {/* <OffersPageContent {...props} limit={10} /> */}
    </div>
  );
};

export async function getServerSideProps() {
  let response = await fetch(`http://localhost:3002/api/front/stores/`);
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

  let clinksRes = await fetch(`http://localhost:3002/api/front/cuels/offers`);
  let cuelinksOffers = await clinksRes.json();

  let flipkartOffersRes = await fetch(
    `http://localhost:3002/api/front/directPartners/flipkart__offers`
  );
  let getflipkartOffers = await flipkartOffersRes.json();

  let flipkartFlashOffersRes = await fetch(
    `http://localhost:3002/api/front/directPartners/flipkart__offers?q=dotd`
  );
  let getflipkartFlashOffers = await flipkartFlashOffersRes.json();


  return {
    props: {
      storeInfo: getStoreIdRes,
      cuelinksOffers: cuelinksOffers,
      flipkartOffers: getflipkartOffers.allOffersList,
      flipkartFlashOffers: getflipkartFlashOffers.dotdList,
    },
  };
}

export default Index;
