const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    nicNumber: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", UserSchema)