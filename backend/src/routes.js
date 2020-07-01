const express = require('express')

const MessageController = require('./app/controllers/MessageController')

const routes = express.Router()

routes.post('/api', MessageController.store)

module.exports = routes