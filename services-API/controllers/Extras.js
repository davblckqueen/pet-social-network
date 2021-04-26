'use strict';

var utils = require('../utils/writer.js');
var Extras = require('../service/ExtrasService');

module.exports.getProductById = function getProductById (req, res, next, productId) {
  Extras.getProductById(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProducts = function getProducts (req, res, next, providerId) {
  Extras.getProducts(providerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProviderById = function getProviderById (req, res, next, providerId) {
  Extras.getProviderById(providerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProviders = function getProviders (req, res, next) {
  Extras.getProviders()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTicketById = function getTicketById (req, res, next, ticketId) {
  Extras.getTicketById(ticketId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTickets = function getTickets (req, res, next) {
  Extras.getTickets()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVendorById = function getVendorById (req, res, next, vendorId) {
  Extras.getVendorById(vendorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVendors = function getVendors (req, res, next) {
  Extras.getVendors()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
