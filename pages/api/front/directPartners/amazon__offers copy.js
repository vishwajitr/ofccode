// https://medium.com/@arifulhaque/how-to-use-amazon-product-advertising-api-v5-0-in-nodejs-263deba322b7.
//

import Api from 'amazon-pa-api50';
import Config from 'amazon-pa-api50/lib/config';
// Optional for different resources
import resources from 'amazon-pa-api50/lib/options';

// for product condition
import condition from 'amazon-pa-api50/lib/options';
// Optional for different country
import country from 'amazon-pa-api50/lib/options'
// for Search Index
import searchIndex from 'amazon-pa-api50/lib/options'
console.log('a')

let myConfig = new Config();

// // By Default all resources and will connect to United States
// // let myConfig = new Config();
// // if you want other country then united states.
// // let myConfig = new Config(undefined, country.UnitedKingdom);
// // if you want custom resources. this custom `resources.Offers` will be set default to all of your search. You can customize the resources in your search specific function also.
// let myConfig = new Config(resources.Offers);
// // if you want custom resources with different country
// // let myConfig = new Config(resources.ItemInfo, country.Canada);

myConfig.accessKey = 'AKIATH7E3E3W7QCM5G4D'
myConfig.secretKey = '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'
myConfig.partnerTag = 'sportybruh0a-20'

const api = new Api(myConfig)

let resourceList = resources.Resources.getItemInfo
resourceList = resourceList.concat(resources.getImagesPrimary)
  


export default function handler(req, res) {
 // res.status(200).json(resp)

 api.getItemById(['B087BXP7VX'], {
  parameters: resourceList,
  condition: condition.Any
}).then((response) => {
  // console.log(' ===== find by Item ids =====')
  console.log('data', response.data)
  // res.status(200).json(response.data)
}).catch((error) => {
  console.log('Error: ', error);
})
res.end()
  }
    
  