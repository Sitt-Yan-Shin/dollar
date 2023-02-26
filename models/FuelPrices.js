const mongoose = require('mongoose');

const FuelSchema = mongoose.Schema({
    nineTwo: {
        type: String,
        required: true
    },
    nineFive: {
        type: String,
        required: true
    },
    preDisel: {
        type: String,
        required: true
    },
    Diesel: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Fuels', FuelSchema);