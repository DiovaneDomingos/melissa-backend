const express = require('express')

const routes = express.Router()



routes.get('/', (req, res) => {
  console.log('JDKSLDSADA')
})

routes.post('/api', (req, res) => {

})

module.exports = routes