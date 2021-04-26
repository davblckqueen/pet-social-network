const mongoose = require('mongoose');

const TicketMongoSchema = new mongoose.Schema({
    providerId: String,
    customerId: {type: String, index: true},
    vendorId: {type: String, index: true},
    products: [{
        productId: {type: String, index: true},
        qty: {type: Number, index: true}
    }],
    value: Number,
    tax: Number
},{
    timestamps: {
        createdAt: 'createdOn'
    }
});

TicketMongoSchema.index({"createdOn": 1});

module.exports = mongoose.model('tickets', TicketMongoSchema);
