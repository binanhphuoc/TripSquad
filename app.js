const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config()
const auth = require('./routes/auth')
const test = require('./routes/test')
const app = express()

// connect to MongoDB
const mongoose = require('mongoose')

mongoose.Promise = require('bluebird')
mongoose.connect(process.env.DB_ENV_VAR, {
  promiseLibrary: require('bluebird')
})
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err))

// router for login

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  'extended': 'false'
}))
app.use(express.static(path.join(__dirname, 'build')))

app.set('view engine', 'html')

app.use('/api/auth', auth)
app.use('/api/test', test)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  console.log(err)

  if (req.app.get('env') !== 'development') {
    delete err.stack
  }

  res.status(err.statusCode || 500).json(err)
})
module.exports = app
