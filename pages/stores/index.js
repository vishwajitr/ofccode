import axios from "axios";
import Search from "../search/searchBox";
import TopStores from "../components/Store/topStores";

const Index = (props) => {
  return (
    <div className="container">
      <div className="search__wrapper">
        <Search />
      </div>
      <div className="topStores__wrapper">
        <h3>All Stores</h3>
        <ul className="topStores__Ul">
          <TopStores storeInfo={props.storeInfo} />
        </ul>
      </div>
    </div>
  );
};


export async function getServerSideProps() {
  let getStoreIdRes = await axios.get(
    `http://localhost:3002/api/front/`
  );
 
  getStoreIdRes = getStoreIdRes.data;
  getStoreIdRes = getStoreIdRes.filter((store) => store.site__StoreEnabled == 1);

  return {
    props: {
      storeInfo: getStoreIdRes,
    },
  };
};

export default Index;
