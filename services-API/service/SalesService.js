// Dependencies
const _ = require('lodash');
const mongoose = require('mongoose');
//Models
const Provider = require("../models/Provider");
const Product = require("../models/Product");
const Vendor = require("../models/Vendor");
const Ticket = require("../models/Ticket");
// Utils
const msg = require('../utils/messages').msg;

/**
 * BUY a Product *
 * @param {Object} body - BuyRequest Ticket object that needs to be added to the ledger
 * @param {{
 *     productId: string,
 *     qty: number
 * }[]} body.products - Collection
 * @param {string} body.customerId - randomString
 * @param {string} body.vendorId - ID for a Vendor
 * @param {string} providerId - String ID of provider
 * @return {Object} TicketResponse
 **/
exports.buyProductById = function(body, providerId) {
  return new Promise(async (resolve, reject) => {
    try {
      //Validate the existence of the Provider
      const providerExists = await Provider.exists({_id: mongoose.Types.ObjectId(providerId)});
      if (!providerExists) return reject(msg.not_found('Provider'));
      // Get and validate vendor
      const vendor = await Vendor.findById(body.vendorId).lean();
      if (_.isNil(vendor)) return reject(msg.not_found('Vendor'));
      // Validate if product collection is Empty
      if (_.isEmpty(body.products)) return reject(msg.not_found('Products'));
      // Generate Ticket
      const ticket = {
        providerId,
        vendorId: vendor._id.toString(),
        vendorName: vendor.name,
        customerId: body.customerId,
        value: 0.0,
        tax: 0.05
      };
      await Promise.all(_.map(body.products, async (productIns) => {
        // Look for specific product and validate
        const product = !_.isNil(productIns) && !_.isEmpty(productIns) ? await Product.findById(productIns.productId).lean()
            .catch(e => reject (msg.internal_error(e))) : null;
        if (_.isNil(product)) return reject(msg.not_found('Product'));
        // Add product on the Ticket
        if (_.isNil(ticket.products)) ticket.products = [];
        productIns.name = product.name;
        productIns.valuePeerUnit = parseFloat(product.value);
        productIns.value = productIns.valuePeerUnit * ((productIns.qty > 0) ? parseFloat(productIns.qty) : 1);
        if (_.includes(ticket.products, prod => prod.productId === productIns.productId)) {
          const index = _.findIndex(ticket.products, prod => prod.productId === productIns.productId);
          ticket.products[index].value += productIns.value;
        } else {
          ticket.products.push(productIns);
        }
        ticket.value += productIns.value;
      }));
      // Add taxes
      const taxPercent = (ticket.value*ticket.tax)/100;
      ticket.totalValue = ticket.value + taxPercent;
      // Create Ticket
      await Ticket.create(ticket);
      // END
      resolve(ticket);
    } catch (e) {
      reject (msg.internal_error(e));
    }
  });
}


/**
 * Returns all SALES REPORT of a provider
 *
 * providerId String ID of provider to filter
 * customerId String ID of customer to filter (optional)
 * vendorId String ID of vendor to filter (optional)
 * products List IDs of product to filter (optional)
 * returns ProviderResponse
 **/
exports.getProviderSales = function(providerId,customerId,vendorId,products) {
  return new Promise(async (resolve, reject) => {
    try {
      // Generate query object
      const query = _.omitBy({
        providerId, customerId, vendorId
      }, _.isNil);
      // If products query param exist, modify the query object
      if (!_.isNil(products) && !_.isEmpty(products)) query.products = {
        $elemMatch: {
          productId: {$in: products}
        }
      }
      //Validate the existence of the Provider
      const providerExists = await Provider.exists({_id: mongoose.Types.ObjectId(providerId)});
      if (!providerExists) return reject(msg.not_found('Provider'));

      const tickets = await Ticket.find(query).sort({createdOn: -1}).lean();

      const salesReport = {
        totalEarned: 0.0,
        soldItems: 0
      }

      // Add processed tickets to report
      salesReport.sales = await Promise.all(_.map(tickets, async (ticket) => {
        // Get and validate vendor
        const vendor = await Vendor.findById(ticket.vendorId).lean();
        if (_.isNil(vendor)) return reject(msg.not_found('Vendor'));
        ticket.vendorName = vendor.name;
        // Validate if product collection is Empty
        if (_.isEmpty(ticket.products)) return reject(msg.not_found('Products'));
        // Process tickets
        ticket.products = await Promise.all(_.map(ticket.products, async (productIns) => {
          // Look for specific product and validate
          const product = !_.isNil(productIns) ? await Product.findById(productIns.productId).lean()
              .catch(e => reject(msg.internal_error(e))) : null;
          if (_.isNil(product)) return reject(msg.not_found('Product'));
          // Add product on the Ticket
          productIns.valuePeerUnit = parseFloat(product.value);
          productIns.name = product.name;
          productIns.value = productIns.valuePeerUnit * ((productIns.qty > 0) ? parseFloat(productIns.qty) : 1);
          ticket.value += productIns.value;
          salesReport.soldItems += productIns.qty;
          return productIns;
        }));
        // Add taxes
        const taxPercent = (ticket.value * ticket.tax) / 100;
        ticket.totalValue = ticket.value + taxPercent;
        salesReport.totalEarned += ticket.totalValue;
        return ticket;
      }));
      resolve(salesReport);
    } catch (e) {
      reject (msg.internal_error(e));
    }
  });
}

