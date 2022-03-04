const express = require('express')
const morgan = require('morgan')
const rutas = require('./routes/tasks.routes')

const app = express()

app.use(morgan('dev'))
app.use(rutas)

app.listen(3000)
console.log('Server on port 3000')