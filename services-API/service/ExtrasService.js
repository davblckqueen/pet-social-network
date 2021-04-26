'use strict';


/**
 * Returns one Product
 *
 * productId String ID of product to return
 * returns ProductResponse
 **/
exports.getProductById = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "providerId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "name" : "Bulto de concentrado",
  "description" : "Bulto de concentrado para perros",
  "_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "value" : 0.8008281904610115,
  "createdOn" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all products of a Provider
 *
 * providerId String ID of provider
 * returns List
 **/
exports.getProducts = function(providerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "providerId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "name" : "Bulto de concentrado",
  "description" : "Bulto de concentrado para perros",
  "_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "value" : 0.8008281904610115,
  "createdOn" : "2000-01-23T04:56:07.000+00:00"
}, {
  "providerId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "name" : "Bulto de concentrado",
  "description" : "Bulto de concentrado para perros",
  "_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "value" : 0.8008281904610115,
  "createdOn" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all providers
 *
 * providerId String ID of provider to return
 * returns ProviderResponse
 **/
exports.getProviderById = function(providerId) {
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


/**
 * Returns all providers
 *
 * returns List
 **/
exports.getProviders = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "ledger" : [ "a02sfD51Sdf5csSD51S8C467a", "a02sfD51Sdf5csSD51S8C467b", "a02sfD51Sdf5csSD51S8C467c" ],
  "name" : "alimentosShop",
  "_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "vendors" : [ "a02sfD51Sdf5csSD51S8C457a", "a02sfD51Sdf5csSD51S8C457b", "a02sfD51Sdf5csSD51S8C457c" ],
  "createdOn" : "2000-01-23T04:56:07.000+00:00",
  "status" : "STORE"
}, {
  "ledger" : [ "a02sfD51Sdf5csSD51S8C467a", "a02sfD51Sdf5csSD51S8C467b", "a02sfD51Sdf5csSD51S8C467c" ],
  "name" : "alimentosShop",
  "_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "vendors" : [ "a02sfD51Sdf5csSD51S8C457a", "a02sfD51Sdf5csSD51S8C457b", "a02sfD51Sdf5csSD51S8C457c" ],
  "createdOn" : "2000-01-23T04:56:07.000+00:00",
  "status" : "STORE"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns one ticket
 *
 * ticketId String ID of vendor to return
 * returns TicketResponse
 **/
exports.getTicketById = function(ticketId) {
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
 * Returns all tickets
 *
 * returns List
 **/
exports.getTickets = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
}, {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns one vendor
 *
 * vendorId String ID of vendor to return
 * returns VendorResponse
 **/
exports.getVendorById = function(vendorId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Roberto Perez",
  "_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "createdOn" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all vendors
 *
 * returns List
 **/
exports.getVendors = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Roberto Perez",
  "_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "createdOn" : "2000-01-23T04:56:07.000+00:00"
}, {
  "name" : "Roberto Perez",
  "_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "createdOn" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

