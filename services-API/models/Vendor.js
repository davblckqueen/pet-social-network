const mongoose = require('mongoose');

const VendorMongoSchema = new mongoose.Schema({
    providerId: String,
    name: String
},{
    timestamps: {
        createdAt: 'createdOn'
    }
});

VendorMongoSchema.index({"createdOn": 1});

module.exports = mongoose.model('vendors', VendorMongoSchema);
