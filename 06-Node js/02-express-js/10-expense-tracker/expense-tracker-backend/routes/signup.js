const express = require('express')
const router = express.Router()
const signupController = require('../controller/signup')

router.post( '/', signupController.signup )

module.exports = router