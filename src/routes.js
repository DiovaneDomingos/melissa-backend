const express = require('express')

const MessageController = require('./app/controllers/MessageController')

const routes = express.Router()

routes.post('/api/client', MessageController.client)
routes.post('/api/store',  MessageController.store)

module.exports = routes