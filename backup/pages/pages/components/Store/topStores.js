import Link from "next/link";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const TopStores = ({ storeInfo }) => {
  let Stores = [];
  Stores = storeInfo;
  if (Stores) {
    const LiElements = Stores.map((store, index) => (
      <li className="storeCard-Col" key={index}>
        <div className="storeCard storeCard-small">
          <Link href={`/store/${store.slug}`} as={`/store/${store.slug}`}>
            <a>             
              <LazyLoadImage alt={store.formatted_name} effect="blur" src={`/stores__logo/${store.slug}-logo-large.jpg`} onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/img-notfound.jpg";
              }} />
            </a>
          </Link>
          <Link href={`/store/${store.slug}`} as={`/store/${store.slug}`}>
            <h5>
              <a className="nav-link">{store.formatted_name}</a>
            </h5>
          </Link>
        </div>
      </li>
    ));
    return LiElements;
  } else {
    return "";
  }
};
export default TopStores;
