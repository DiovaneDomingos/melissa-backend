const express = require('express')
const routes = require('./src/routes.js')

const port = 8080

const app = express()

app.use(express.json())

app.use('/', routes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
