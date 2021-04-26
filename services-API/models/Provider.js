const mongoose = require('mongoose');

const ProviderMongoSchema = new mongoose.Schema({
    name: String,
    type: {
        type: String,
        enum: ['STORE', 'DAYCARE'],
        default: 'STORE'
    }
},{
    timestamps: {
        createdAt: 'createdOn'
    }
});

ProviderMongoSchema.index({"createdOn": 1});

module.exports = mongoose.model('providers', ProviderMongoSchema);
