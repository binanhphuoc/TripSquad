const mongoose = require('mongoose')
const passport = require('passport')
const settings = require('../config/settings')
require('../config/passport')(passport)
const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')

router.get('/', function (req, res) {
  res.json({
    msg: 'I am test {{req.body.username}}'
  })
})
module.exports = router
