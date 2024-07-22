const mongoose = require('mongoose');

const citizenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    lga: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('Citizen', citizenSchema);
