const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const authenticateToken = require('../middlewares/authenticateToken')

router.get('/profile',authenticateToken.fn,userController.getUser)

router.post('/register',userController.registerUser)

router.post('/login',userController.loginUser)

router.post('/uploadform',userController.uploadForm)

router.post('/resend',userController.resend)

module.exports = router
