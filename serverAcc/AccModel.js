const mongoose = require('mongoose')

const AccSchema = new mongoose.Schema({
    accNo:String,
    name:String

})

mongoose.model("accdata",AccSchema)

