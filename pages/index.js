
import Link from "next/link";
import Search from "./components/Search";
import axios from "axios";

const TopStores = ({ storeInfo }) => {
  // console.log(props);
  // return 'abc';
  const array = storeInfo;
  const LiElements = array.map((store, index) => (
    <li className="storeCard-Col" key={index}>
     <div  className="storeCard storeCard-small">
     <Link href="${store.slug}" as={`${store.slug}`}>
        <a>
          <img src={`/stores__logo/${store.storeSlug}-logo-large.jpg`} />
        </a>
      </Link>
      <Link href="${store.slug}" as={`${store.slug}`}>
        <h5>
          <a className="nav-link">{store.name}</a>
        </h5>
      </Link>
       </div> 
    </li>
  ));
  return LiElements;
};

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

export const getStaticProps = async () => {
  const getStoreIdRes = await axios.get(`hhttps://ofccode-api.vercel.app/api/front/`);
  // console.log(getStoreIdRes);
  return {
    props: {
      storeInfo: getStoreIdRes.data,
    },
  };
};

export default Index;
