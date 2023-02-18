const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    currency: {
        type: String,
        required: true
    },
    buy: {
        type: String,
        required: true
    },
    sell: {
        type: String,
        required: true
    },
    updatedTime: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);