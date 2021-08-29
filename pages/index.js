import axios from "axios";
import _ from "lodash";
import Search from "./search/searchBox";
import TopStores from "./components/Store/topStores";
import OffersPageContent from "./components/OffersPageContent";
import Link from "next/link";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
var slug = require('slug')

const convertToSlug = (Text) =>{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}

const FlipkartOffers = ({ flipkartOffers }) => {
  console.log(flipkartOffers)
  for (var i = 0; i < flipkartOffers.length; i++ ) {
    const LiElements = flipkartOffers.map((offer, index) => (
      <li className="offerCard-Col" key={index}>
        <div className="offerCard offerCard-small">
          <Link href={`${offer.url + "&affor=flipkart&affid=vishwajit8" }`} as={`${offer.url  + "&affor=flipkart&affid=vishwajit8" }`}>
            <a target="_blank">
              <img
                src={`${offer.image_url[0].url}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img-notfound.jpg";
                }}
              />
            </a>
          </Link>
        </div>
        
        <h5>
          <Link href={`${offer.url  + "&afffor=flipkart&affid=vishwajit8" }`} as={`${offer.url  + "&afffor=flipkart&affid=vishwajit8" }`}>
            <a target="_blank">
              {offer.title}
            </a>
          </Link>
        </h5>
        <p> {offer.name}</p>
      </li>
    ));
    return LiElements;
  }
};



const Index = (props) => {
  return (
    <div className="container">
      <div className="search__wrapper">
        <Search />
      </div>
      
     

      <div className="topStores__wrapper">
        <h3>Top Stores</h3>
        <ul className="topStores__Ul">
          <TopStores storeInfo={props.storeInfo} />
        </ul>
        <br />
        <br />
      </div>

      <h3>Flipkart Deal Of The Day Offers (Flash Offers)</h3>
      <ul className="FlipkartOffers_Ul">
        <FlipkartOffers flipkartOffers={props.flipkartFlashOffers} />
      </ul>
      
      <h3>Flipkart Live Offers</h3>
      <ul className="FlipkartOffers_Ul">
        <FlipkartOffers flipkartOffers={props.flipkartOffers} />
      </ul>

      
      {/* <h3>Trending Offers</h3> */}
      {/* <OffersPageContent {...props} limit={10} /> */}
    </div>
  );
};

export async function getServerSideProps() {
  let response = await fetch(`https://ofccode-api-git-main-sportybruh1990.vercel.app/api/front/stores/`);
  let getStoreIdRes = await response.json();
  let selectedStoresArr = [
    1001,
    1002,
    15481,
    15542,
    14719,
    23961,
    23825,
    15591,
    21361
  ];
  let FinalData = [];
  var selectedStores = _.map(selectedStoresArr, function (storeId, Index) {
    let filteredData = getStoreIdRes.filter(
      (store) => store.affInfo__StoreId == storeId
    );
    FinalData[Index] = filteredData[0];
  });

  getStoreIdRes = FinalData.filter((store) => store.site__StoreEnabled == 1);

  let clinksRes = await fetch(`https://ofccode-api-git-main-sportybruh1990.vercel.app/api/front/cuels/offers`);
  let cuelinksOffers = await clinksRes.json();

  let flipkartOffersRes = await fetch(
    `http://localhost:3002/api/front/directPartners/flipkart__offers`
  );
  let getflipkartOffers = await flipkartOffersRes.json();
  // console.log(getflipkartOffers);

  let flipkartFlashOffersRes = await fetch(
    `http://localhost:3002/api/front/directPartners/flipkart__offers?q=dotd`
  );
  let getflipkartFlashOffers = await flipkartFlashOffersRes.json();


  return {
    props: {
      storeInfo: getStoreIdRes,
      // cuelinksOffers: cuelinksOffers,
      flipkartOffers: getflipkartOffers,
      flipkartFlashOffers: getflipkartFlashOffers,
    },
  };
}

export default Index;
