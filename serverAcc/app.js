const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./AccModel')

//test
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

//test 2

app.use(bodyParser.json())

const AccModel = mongoose.model("accdata")
const mongoUri = "mongodb+srv://lahiru:exnfn5firszdh6p9@cluster0.fht9s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//password= exnfn5firszdh6p9 
mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
})

mongoose.connection.on("connected", ()=>{
    console.log("connected to mongo db")
})

mongoose.connection.on("error",(err)=>{
    console.log("error",err)
})

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

app.listen(4000,()=>{
    console.log('Server is running on port 4000')
})