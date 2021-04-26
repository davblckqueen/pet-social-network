// Dependencies
const _ = require('lodash');
//Models
const Vendor = require("../models/Vendor");
// Utils
const msg = require('../utils/messages').msg;
/**
 * Returns all vendors
 * @return {Array<Object>} - List
 */
exports.getVendors = function() {
    return new Promise((resolve, reject) => {
        Vendor.find().lean()
            .then(vendors => resolve(vendors))
            .catch(error => reject(msg.internal_error(error)))
    });
}
/**
 * Returns one vendor
 * @param {string} vendorId - ID of vendor to return
 * @return {Object} - VendorResponse
 */
exports.getVendorById = function(vendorId) {
    return new Promise((resolve, reject) => {
        Vendor.findById(vendorId).lean()
            .then(vendor => {
                if (_.isNil(vendor)) return reject(msg.not_found("Vendor"))
                return resolve(vendor);
            })
            .catch(error => reject(msg.internal_error(error)))
    });
}

exports.getVendorsByProvider = function(providerId) {
    return new Promise((resolve, reject) => {
        Vendor.find({providerId}).lean()
            .then(vendors => {
                if (_.isEmpty(vendors)) return reject(msg.not_found("Vendors"))
                return resolve(vendors);
            })
            .catch(error => reject(msg.internal_error(error)))
    });
}
