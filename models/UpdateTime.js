const mongoose = require('mongoose');

const TimeSchema = mongoose.Schema({
    updated: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Times', TimeSchema);