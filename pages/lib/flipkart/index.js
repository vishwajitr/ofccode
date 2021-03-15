import { get } from 'request';
import { genFlipkartUrl } from './utils';

var runFKQuery = function (credentials, method) {
  return function (query, cb) {
    var url = genFlipkartUrl(query, credentials, method);
    if (typeof cb === 'function') {
      get({
        'url' : url,
        'headers' : {
          'Fk-Affiliate-Id' : credentials.FkAffId,
          'Fk-Affiliate-Token' : credentials.FkAffToken
        }
      }, function(err, response, body){
        if (err) {
          cb(err);
        }
        else if (!response) {
          cb("No response recieved (check internet connection)");
        }
        else if (response.statusCode == 400) {
          cb("Error: Bad request. Invalid input parameters");
        }
        else if (response.statusCode == 401) {
          cb("Error: Unauthorized. API Token or Affiliate Tracking ID invalid");
        }
        else if (response.statusCode == 403) {
          cb("Error: Forbidden. Tampered URL");
        }
        else if (response.statusCode == 404) {
          cb("Error: Not found");
        }
        else if (response.statusCode == 410) {
          cb("Error: URL expired");
        }
        else if (response.statusCode == 500) {
          cb("Error: Internal server error");
        }
        else if (response.statusCode == 503) {
          cb("Error: Service unavailable");
        }
        else if (response.statusCode == 599) {
          cb("Error: Connection timed out");
        }
        else if (response.statusCode == 200){
          cb(null, body);
        }else{
          cb(response);
        }
      });
    }
  }
}


var createClient = function (credentials) {
  return {
    keywordSearch: runFKQuery(credentials, 'keywordSearch'),
    idSearch: runFKQuery(credentials,'idSearch'),
    getAllOffers: runFKQuery(credentials,'getAllOffers'),
    getDealsOfDay: runFKQuery(credentials,'getDealsOfDay'),
    getOrdersReport: runFKQuery(credentials,'getOrdersReport'),
    getAppInstReport: runFKQuery(credentials,'getAppInstReport'),
    getCategoryFeed: runFKQuery(credentials,'getCategoryFeed'),
    getProductsFeed: runFKQuery(credentials,'getProductsFeed')
  };
};

const _createClient = createClient;
export { _createClient as createClient };
