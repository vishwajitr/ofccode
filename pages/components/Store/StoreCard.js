import Link from 'next/link'
import Image from 'next/image'

const StoreCard = (props) => {
    return (            
        <div className="StoreCard">
            <div className="StoreCard__image">
               <Image src={`${(props.couponsData1)? props.couponsData1.data[1][6] : ""}`} 
               height="50"
               width="100%"
               onError={(e)=>{e.target.onerror = null; e.target.src="/img-notfound.jpg"}}/>  
            </div>
            <div className="StoreCard__name"><i className="fas fa-store"></i> <Link href="/"><a>Shop on {(props.storeInfo)? props.storeInfo.name : ""}</a></Link></div>
            <div className="StoreCard__ratings"><Link href="/" title="OffersCode.in | Home"><a>Home</a></Link> <i className="fas fa-angle-right"></i> <Link href={`/stores/`}><a>Stores</a></Link></div>
            <div className="StoreCard__ratings">
            <Image src="/5star.png"  height="10"
                width="100%"/>
            </div>
            <br/>
            <div className="StoreCard__submitCoupon"><Link href="/store/submit-coupon"><a>Submit a Coupons</a></Link></div>

        </div>
    )
}

export default StoreCard