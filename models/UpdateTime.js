const mongoose = require('mongoose');

const TimeSchema = mongoose.Schema({
    updated: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Times', TimeSchema);