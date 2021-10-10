const router = require('express').Router()
const Messages = require('../ctrl/messagingServiceCtrl')

router.route('/newobileNumber')
    .post(Messages.registerMobileNumber)

module.exports = router