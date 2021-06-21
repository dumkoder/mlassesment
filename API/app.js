const express = require('express')

const getItemRoutes = require('./routes/getItems')

const app = express()

app.use('/api', getItemRoutes)

app.listen(8080)