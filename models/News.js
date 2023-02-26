const mongoose = require('mongoose');

const NewsSchema = mongoose.Schema({
    News: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('News', NewsSchema);