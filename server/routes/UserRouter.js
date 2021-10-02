const router = require('express').Router()
const UserCtrl = require('../ctrl/userCTRL')

router.route('/NewUser')
    .post(UserCtrl.registerUser)

router.route('/UserLogin')
    .post(UserCtrl.login)

module.exports = router