
import Link from "next/link";
import Search from "./components/Search";
import axios from "axios";

const TopStores = ({ storeInfo }) => {
  // console.log(props);
  // return 'abc';
  const array = storeInfo;
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

        <TopStores storeInfo={props.storeInfo} />
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
