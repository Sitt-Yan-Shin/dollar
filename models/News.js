const mongoose = require('mongoose');

const NewsSchema = mongoose.Schema({
    News: {
        type: String,
        required: false
    },
    NewsTwo: {
        type: String,
        required: false
    },
    NewsThree: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('News', NewsSchema);