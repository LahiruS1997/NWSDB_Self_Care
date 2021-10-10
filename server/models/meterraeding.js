const mongoose = require('mongoose')

const meterReadingSchema = new mongoose.Schema({
    meter:{
        type: Number,
        required: true
    },
    images:{
        type: Object
    }

},{
    timestamps:true//important
})

module.exports = mongoose.model("meter", meterReadingSchema)