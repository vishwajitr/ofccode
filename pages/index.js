import axios from "axios";
import Search from "../pages/search/index";
import TopStores from "./components/Store/topStores";
import _ from 'lodash';

const Index = (props) => {
  return (
    <div className="container">
      <div className="search__wrapper">
        <Search />
      </div>
      <div className="topStores__wrapper">
        <h3>
          Top Stores ::..
        </h3>

        <ul className="topStores__Ul"><TopStores storeInfo={props.storeInfo} /></ul>
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
  return {
    props: {
      storeInfo: getStoreIdRes,
    },
  };
};

export default Index;
