// https://github.com/zivost/flipkart-affiliate-client/
var affiliate = require("flipkart-affiliate-client");

let client = affiliate.createClient({
  FkAffId: "vishwajit8",
  FkAffToken: "df7952131bb74afaa6a2dc57d32240d0",
  responseType: "json",
});

let getAllOffersRes;
let getDealsOfDayRes;
export default function handler(req, res) {
  if(req.query.q === 'dotd'){  
    client.getDealsOfDay(null, function (err, resp) {
      if (!err) {
        res.status(200).json(resp)
      }
    });
  }else{
    client.getAllOffers(null, function (err, resp) {
      if (!err) {
        res.status(200).json(resp)
      }
    });
  }
}
