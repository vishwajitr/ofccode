import Image from 'next/image'
import Link from 'next/link'
const StoreCard = (props) => {
    return (            
        <div className="StoreCard">
            <div className="StoreCard__image">
               <img src={`/stores__logo/${(props.storeInfo)? props.storeInfo.slug : ""}-logo-large.jpg`}/>  
            </div>
            <div className="StoreCard__name"><i className="fas fa-store"></i> Shop on {(props.storeInfo)? props.storeInfo.name : ""}</div>
            <div className="StoreCard__ratings"><Link href="/"><a>Home</a></Link> = <Link href={`/stores/`}><a>Stores</a></Link></div>
            <div className="StoreCard__ratings">
            <img src="/5star.png"/>
            </div>
            <br/>
            <div className="StoreCard__submitCoupon"><Link href="/store/submit-coupon"><a>Submit a Coupons</a></Link></div>

        </div>
    )
}

export default StoreCard