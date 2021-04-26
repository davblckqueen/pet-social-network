// Dependencies
const _ = require('lodash');
//Models
const Provider = require("../models/Provider");
// Utils
const msg = require('../utils/messages').msg;
/**
 * Returns all providers
 * @return {Array<Object>} - List
 */
exports.getProviders = function() {
    return new Promise((resolve, reject) => {
        Provider.find().lean()
            .then(providers => resolve(providers))
            .catch(error => reject(msg.internal_error(error)))
    });
}
/**
 * Returns one provider
 * @param {string} providerId - ID of provider to return
 * @return {Object} - ProviderResponse
 */
exports.getProviderById = function(providerId) {
    return new Promise((resolve, reject) => {
        Provider.findById(providerId).lean()
            .then(provider => {
                if (_.isNil(provider)) return reject(msg.not_found("Provider"))
                return resolve(provider);
            })
            .catch(error => reject(msg.internal_error(error)))
    });
}
