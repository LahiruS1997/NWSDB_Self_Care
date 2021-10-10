const { model } = require('mongoose')
const MessageService = require('../models/messagingservice')

const messageService = {
    registerMobileNumber: async (req, res) => {
        try {
            const { mobileNumber } = req.body;

            const newMobile = new MessageService({
                mobileNumber
            })
            await newMobile.save()

            res.json({msg: "You are Register successfully for messaging service"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = messageService