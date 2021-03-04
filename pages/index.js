
import Link from "next/link";
import Search from "./components/Search";
import axios from "axios";

const TopStores = ({storeInfo}) => {
  const array = storeInfo;
  const LiElements = array.map((store, index) => (
      <li className="storeCard-Col" key={index}>
       <div  className="storeCard storeCard-small">
       <Link href="${store.slug}" as={`${store.slug}`}>
          <a>
            {/* <img src={`/stores__logo/${store.slug}-logo-large.jpg`} /> */}
        </a>
      </Link>
      <Link href="${store.slug}" as={`${store.slug}`}>
        <h5>
          <a className="nav-link">{store.formatted_name}</a>
        </h5>
      </Link>
       </div> 
    </li>
  ));
  return LiElements;
  return 'abc';
  // return array;
};

const Index = (props) => {
  console.log(props);
  return (
    <div className="container">
      <div className="search__wrapper">
        {/* <Search /> */}
      </div>
      <div className="topStores__wrapper">
        <h3>
          Top Stores ::
        </h3>

        <ul className="topStores__Ul"><TopStores storeInfo={props.storeInfo} /></ul>
        
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const getStoreIdRes = await axios.get(`https://ofccode-api.vercel.app/api/front/`);

  return {
    props: {
      storeInfo: getStoreIdRes.data,
    },
  };
};

export default Index;
