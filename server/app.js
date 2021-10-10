require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

require('./models/User')
require('./Plumbers')

const cors = require('cors')
app.use(bodyParser.json())
app.use(cors())

const fileupload = require('express-fileupload');
app.use(fileupload({
    useTempFiles: true
}))

const User = mongoose.model("Users")
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
//t.a.s.hasitha
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

//getAll Users
app.get('/', (req, res) => {
    User.find().then(data => {
        res.send(data)
    }).catch(err => { 
        console.log(err)
    })
})

//get User by email
app.get('/getSingleUsers', (req, res) => {
    const {email, password} = req.body;

    User.findOne({email}).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})


//app.use('/emp', require('./routes/UserRouter'))
app.use('/user', require('./routes/UserRouter'))

//A.D.H.M.Dewapriya
app.use('/mobile', require('./routes/messagingRoutes'))
app.use('/api', require('./routes/uploadm') )
app.use('/api', require('./routes/meterReadingRoter') )

app.listen(3000, () => {
    console.log('Server running')
})










/**
 * "fullname": "Lahiru Sanjeewa",
    "email": "rathne1997@gmail.com",
    "userName": "LahiruS",
    "password": "123456",
    "nicNumber": "973011375V",
    "mobileNumber": "0788635339"

    //
    app.post('/register', (req, res) => {
    const user = new User({
        fullname: req.body.fullname,
        email: req.body.email,
        userName: req.body.userName,
        password: req.body.password,
        nicNumber: req.body.nicNumber,
        mobileNumber: req.body.mobileNumber,
    })
    user.save().then(data => {
        //console.log(data)
        //res.send("Registered.")
    }).catch(err => {
        console.log(err)
    })
})
 */