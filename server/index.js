require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const ctrl = require('./controller')

const app = express()
app.use(bodyParser.json())

let {
    CONNECTION_STRING
} = process.env

massive(CONNECTION_STRING).then(db=>app.set('db',db))

app.post('/api/auth/register', ctrl.register)

const port = 4000

app.listen(port, ()=>{console.log(`Running on ya boi ${port}`)})