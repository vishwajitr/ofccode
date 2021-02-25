import React, { useEffect, useRef  } from "react";
import Router, { useRouter,Redirect } from 'next/router';


 

const GoTo = (props) => {
    // // const prevProps = useRef(props);
    // console.log(props)
    // useEffect(() => {
    //     const {pathname} = Router;
    //     console.log(prevProps.gotoLink)
    //     // if(pathname == '/goto' ){
    //     //     // Router.push('/about')
    //     // }
    //   });
    // return <div></div>
    
}


export const getStaticProps  = async ({params}) => {
  
    const storeSlug = params.slug;
   
  
      return {
        props:{
          couponsData1 :data
        },   
      };
      
    }
    



export default GoTo