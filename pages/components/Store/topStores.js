import Link from "next/link";
const TopStores = ({ storeInfo }) => {
  let Stores = [];  
  Stores = storeInfo;
  if(Stores){
  const LiElements = Stores.map((store, index) => (
    <li className="storeCard-Col" key={index}>
      <div className="storeCard storeCard-small">
        <Link href={`${store.slug + "-" + store.slugType}`} as={`${store.slug + "-" + store.slugType}`}>
          <a>
            <img
              src={`/stores__logo/${store.slug}-logo-large.jpg`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/img-notfound.jpg";
              }}
            />
          </a>
        </Link>
        <Link href={`${store.slug + "-" + store.slugType}`} as={`${store.slug + "-" + store.slugType}`}>
          <h5>
            <a className="nav-link">{store.formatted_name}</a>
          </h5>
        </Link>
      </div>
    </li>
  ));
  return LiElements;
  }else{
    return '';
  }
};
export default TopStores;
