require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./models/User')
const cors = require('cors')
require('./models/AccModel')

app.use(bodyParser.json())

//test
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

const AccModel = mongoose.model("accdata")

const User = mongoose.model("Users")

const mongoURL = "mongodb+srv://explores_CAFE:password1234@clusterx.thoik.mongodb.net/Self_care?retryWrites=true&w=majority"

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected", () => {
    console.log("Mongodb connected.")
})
mongoose.connection.on("error", (err) => {
    console.log("Mongodb error : ", err)
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

//w.m.p.l.waruna
app.get('/getAccounts',(req,res)=>{
    AccModel.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/send-acc',(req,res) =>{
    const accModel = new AccModel({
        accNo:req.body.accNo,
        name:req.body.name
     

    })
    accModel.save()
    .then(data=>{
        console.log(data)
        res.send("success")
    }).catch(err=>{
        console.log(err)
    })
   
})

app.post('/deleteAcc',(req,res)=>{
    AccModel.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send("deleted")
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/updateAcc',(req,res) =>{
    AccModel.findByIdAndUpdate(req.body.id,{
        accNo:req.body.accNo,
        name:req.body.name
    }).then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

//app.use('/emp', require('./routes/UserRouter'))
app.use('/user', require('./routes/UserRouter'))

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