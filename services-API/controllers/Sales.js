'use strict';

var utils = require('../utils/writer.js');
var Sales = require('../service/SalesService');

module.exports.buyProductById = function buyProductById (req, res, next, body, providerId) {
  Sales.buyProductById(body, providerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProviderSales = function getProviderSales (req, res, next, customerId, vendorId, products, providerId) {
  Sales.getProviderSales(providerId, customerId, vendorId, products)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
