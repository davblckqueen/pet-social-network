const mongoose = require('mongoose');

const ProductMongoSchema = new mongoose.Schema({
    providerId: String,
    name: String,
    description: String,
    value: Number
},{
    timestamps: {
        createdAt: 'createdOn'
    }
});

ProductMongoSchema.index({"createdOn": 1});

module.exports = mongoose.model('products', ProductMongoSchema);
