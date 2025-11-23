const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    timeDuration: {
        type: String,
    },
    videoUrl: {
        type: String,
    },
    description: {
        type: String,
    }
});

exports = mongoose.model('Section', sectionSchema);