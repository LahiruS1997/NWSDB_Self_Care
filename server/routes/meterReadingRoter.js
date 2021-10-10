const router = require('express').Router()
const meterCrtl = require('../ctrl/meterReadingCtrl')

router.route('/meter')
    .post(meterCrtl.createmeter)

module.exports = router