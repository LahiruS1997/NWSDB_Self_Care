const express = require ('express')
const app = express()
const bodyParser = require ('body-parser')
const mongoose = require('mongoose')
require('./Plumbers')

const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

const Plumbers = mongoose.model("Plumbers")


const mongoURL = "mongodb+srv://explores_CAFE:password1234@clusterx.thoik.mongodb.net/Self_care?retryWrites=true&w=majority"

mongoose.connect(mongoURL, {
    useNewUrlParser: true
})

mongoose.connection.on("connected", () => {
    console.log("Mongodb connected.")
})
mongoose.connection.on("error", (err) => {
    console.log("Mongodb error : ", err)
})

app.get('/get-plumbers', (req, res) => {
    Plumbers.find({}).then(data => {
        res.send(data)
    }).catch(err=> {
        console.log(err)
    })
     
})


app.post('/send-plumbers', (req, res) => {
    const plumbers = new Plumbers({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        experience: req.body.experience
    })
    plumbers.save()
    .then(data=> {
        console.log(data)
        res.send("Posted Success")
    }).catch(err=> {
        console.log(err)
    })
    
})

app.listen(3000, () => {
    console.log("Server is Running")
})