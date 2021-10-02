const UsersH = require('../models/User')
const jwt = require('jsonwebtoken')

const userCtrl = {
    registerUser: async (req, res) => {
        try {
            const {fullname, email, userName, password, nicNumber, mobileNumber} = req.body;

            const user = await UsersH.findOne({email})
            if(user) return res.status(400).json({msg: "The email already exist."})
            //const newUser = new UsersH({fullname, email, userName, password, nicNumber, mobileNumber})
            const newUserX = new UsersH({
                fullname,
                email,
                userName,
                password,
                nicNumber,
                mobileNumber
            })
            await newUserX.save()

            const accesstoken = createAccessToken({id: newUserX._id})
            const refreshtoken = createRefreshToken({id: newUserX._id})

            res.json({accesstoken})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    login: async (req, res) => {
        try {
            const {email, password} = req.body;
            const user = await UsersH.findOne({email})
            if(!user) return res.status(400).json({msg: "User does not exist in here"})

            if(user) {
                const userPassword = await UsersH.findOne({password})
            }
            
            if(!userPassword) return res.status(400).json({msg: "User password is not matched"})

            if(userPassword) return res.status(400).json({msg: "User password is matched"})
            

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

const createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '3d'})
}

const createRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = userCtrl