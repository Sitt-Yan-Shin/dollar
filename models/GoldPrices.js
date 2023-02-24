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
    YGN: {
        type: String,
        required: false
    },
    MDY: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('Gold', GoldSchema);