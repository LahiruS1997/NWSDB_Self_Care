const mongoose = require('mongoose')

const MessagingServiceSchema = new mongoose.Schema({
    mobileNumber: {
        type: Number, 
        required: true
    }
}, {
    timestamps: true
}) 

module.exports = mongoose.model("MobileNumber", MessagingServiceSchema)