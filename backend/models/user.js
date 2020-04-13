const mongoose = require('mongoose')

const usermodel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model("usermodel", usermodel)