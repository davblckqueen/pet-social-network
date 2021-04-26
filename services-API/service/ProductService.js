// Dependencies
const _ = require('lodash');
//Models
const Product = require("../models/Product");
// Utils
const msg = require('../utils/messages').msg;

/**
 * Returns one product
 * @param {string} productId - ID of product to return
 * @return {Object} - ProductResponse
 */
exports.getProductById = function(productId) {
    return new Promise((resolve, reject) => {
        Product.findById(productId).lean()
            .then(product => {
                if (_.isNil(product)) return reject(msg.not_found("Product"))
                return resolve(product);
            })
            .catch(error => reject(msg.internal_error(error)))
    });
}
/**
 * Returns all products from a Provider
 * @param {string} providerId - ID of provider
 * @return {Array<Object>} - List
 */
exports.getProducts = function(providerId) {
    return new Promise((resolve, reject) => {
        Product.find({providerId}).lean()
            .then(products => {
                if (_.isEmpty(products)) return reject(msg.not_found("Products"))
                return resolve(products);
            })
            .catch(error => reject(msg.internal_error(error)))
    });
}
