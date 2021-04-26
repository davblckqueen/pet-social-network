'use strict';

const utils = require('../utils/writer.js');
const Providers = require('../service/ProviderService');
const Vendors = require('../service/VendorService');
const Tickets = require('../service/TicketService');
const Products = require('../service/ProductService');

module.exports.getProductById = function getProductById (req, res, next, productId) {
    Products.getProductById(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProducts = function getProducts (req, res, next, providerId) {
    Products.getProducts(providerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProviderById = function getProviderById (req, res, next, providerId) {
    Providers.getProviderById(providerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProviders = function getProviders (req, res, next) {
  Providers.getProviders()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTicketById = function getTicketById (req, res, next, ticketId) {
    Tickets.getTicketById(ticketId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTickets = function getTickets (req, res, next, providerId) {
    Tickets.getTickets(providerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVendorById = function getVendorById (req, res, next, vendorId) {
    Vendors.getVendorById(vendorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVendors = function getVendors (req, res, next) {
    Vendors.getVendors()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVendorsByProvider = function getVendors (req, res, next, providerId) {
    Vendors.getVendorsByProvider(providerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
