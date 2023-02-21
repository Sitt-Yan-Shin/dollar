const mongoose = require('mongoose');

const GoldSchema = mongoose.Schema({
    Gold16: {
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