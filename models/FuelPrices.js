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
    disel: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Fuels', FuelSchema);