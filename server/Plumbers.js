const mongoose = require ('mongoose')

const PlumberSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    picture: String,
    experience: String
})

module.exports = mongoose.model("Plumbers", PlumberSchema)