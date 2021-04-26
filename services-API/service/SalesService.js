'use strict';


/**
 * BUY a Product
 *
 * body BuyRequest Ticket object that needs to be added to the ledger (optional)
 * providerId String ID of provider
 * returns TicketResponse
 **/
exports.buyProductById = function(body,providerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "customerId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "vendorId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "tax" : 1.4658129805029452,
  "_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "value" : 6.027456183070403,
  "createdOn" : "2000-01-23T04:56:07.000+00:00",
  "products" : [ {
    "productId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "qty" : 1
  }, {
    "productId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "qty" : 1
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all SALES REPORT of a provider
 *
 * providerId String ID of provider to filter
 * customerId String ID of customet to filter (optional)
 * vendorId String ID of vendor to filter (optional)
 * products List IDs of product to filter (optional)
 * returns ProviderResponse
 **/
exports.getProviderSales = function(providerId,customerId,vendorId,products) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ledger" : [ "a02sfD51Sdf5csSD51S8C467a", "a02sfD51Sdf5csSD51S8C467b", "a02sfD51Sdf5csSD51S8C467c" ],
  "name" : "alimentosShop",
  "_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "vendors" : [ "a02sfD51Sdf5csSD51S8C457a", "a02sfD51Sdf5csSD51S8C457b", "a02sfD51Sdf5csSD51S8C457c" ],
  "createdOn" : "2000-01-23T04:56:07.000+00:00",
  "status" : "STORE"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

