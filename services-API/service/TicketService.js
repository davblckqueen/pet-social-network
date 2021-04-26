// Dependencies
const _ = require('lodash');
//Models
const Ticket = require("../models/Ticket");
// Utils
const msg = require('../utils/messages').msg;

/**
 * Returns one ticket
 * @param {string} ticketId - ID of ticket to return
 * @return {Object} - TicketResponse
 */
exports.getTicketById = function(ticketId) {
    return new Promise((resolve, reject) => {
        Ticket.findById(ticketId).lean()
            .then(ticket => {
                if (_.isNil(ticket)) return reject(msg.not_found("Ticket"))
                return resolve(ticket);
            })
            .catch(error => reject(msg.internal_error(error)))
    });
}
/**
 * Returns all tickets from a Provider
 * @param {string} providerId - ID of provider
 * @return {Array<Object>} - List
 */
exports.getTickets = function(providerId) {
    return new Promise((resolve, reject) => {
        Ticket.find({providerId}).lean()
            .then(tickets => {
                if (_.isEmpty(tickets)) return reject(msg.not_found("Tickets"))
                return resolve(tickets);
            })
            .catch(error => reject(msg.internal_error(error)))
    });
}
