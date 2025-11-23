const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim : true,
        maxLength: 50,
    },
    lastName: {
        type: String,
        required: true,
        trim : true,
        maxLength: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim : true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    accountType: {
        type: String,
        enum: ['Student', 'Instructor', 'Admin'],
        required: true,
    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Profile',
    },
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ],
    image: {
        type: String,
        default: ''
    },
    courseProgress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CourseProgress'
    }
});

module.exports = mongoose.model('User', userSchema);