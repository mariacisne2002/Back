const express = require('express');
const cors = require('cors');
var timeout = require('connect-timeout'); 

const port = (process.env.PORT || 3000)
const app = express()
app.use(timeout(150000));

app.set('port', port)
app.use(cors())
app.use(express.json())

//app.use('/api', require('./routes/route'))

module.exports = app;