const mongoose = require('mongoose');

const GoldSchema = mongoose.Schema({
    Gold16Buy: {
        type: String,
        required: false
    },
    Gold16Sell: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Gold', GoldSchema);