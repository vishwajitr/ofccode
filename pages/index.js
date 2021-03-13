import axios from "axios";
import Search from "./search/searchBox";
import TopStores from "./components/Store/topStores";
import OffersPageContent from './components/OffersPageContent'
import _ from 'lodash';
import Link from "next/link";


const TopOffers = ({ cuelinksOffers }) => {
  let topOffers = [];  
  topOffers = cuelinksOffers;
  if(topOffers){
  const LiElements = topOffers.map((offer, index) => (
    <li className="" key={index}>
      <div className="">
      {/* <Link href="${offer.URL}" as={`${offer.URL}`}> */}
          <a>
            <img
              src={`${offer.Image_URL}`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/img-notfound.jpg";
              }}
              width="200"
            />
          </a>
        {/* </Link> */}
          <h5>
        <Link href={offer.URL} as={offer.URL}>
            <a className="nav-link" target="_blank" rel="nofollow">{offer.Title}</a>
        </Link>
          </h5>
      </div>
    </li>
  ));
  return LiElements;
  }else{
    return '';
  }
};


const Index = (props) => {
  return (
    <div className="container">
      <div className="search__wrapper">
        <Search />
      </div>
      <div className="topStores__wrapper">
        <h3>
          Top Stores
        </h3>

        <ul className="topStores__Ul"><TopStores storeInfo={props.storeInfo} /></ul>
        <br/>
        <br/>
        <hr/>
        <br/>
        <h3>Trending Offers</h3>  
        <OffersPageContent {...props} limit={10}/>
      </div>
    </div>
  );
};


export async function getServerSideProps() {
  let response = await fetch(
    `https://ofccode-api-sportybruh1990.vercel.app/api/front`
  );
  let getStoreIdRes = await response.json();  
  let selectedStoresArr  = [15481, 15542, 14719, 23961, 23825, 15591,14291,21361,22998,23433,22012];
  let FinalData = []; 
  var selectedStores = _.map(selectedStoresArr, function(storeId, Index) {
     let filteredData = getStoreIdRes.filter((store) => (store.affInfo__StoreId == storeId));
      FinalData[Index] = filteredData[0];
  });
  
  getStoreIdRes = FinalData.filter((store) => (store.site__StoreEnabled == 1));



  let clinksRes = await fetch(
    `https://ofccode-api-sportybruh1990.vercel.app/api/front/cuelinks/offers`
  );
  let cuelinksOffers = await clinksRes.json();  
  


  return {
    props: {
      storeInfo: getStoreIdRes,
      cuelinksOffers : cuelinksOffers
    },
  };
};

export default Index;
