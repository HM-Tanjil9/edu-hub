const mongoose = require('mongoose');

const rattingAndReviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    ratting: {
        type: Number,
        required: true,
    },
    review: {
        type: String,
        required: true,
    }
});

exports = mongoose.model('RattingAndReview', rattingAndReviewSchema);