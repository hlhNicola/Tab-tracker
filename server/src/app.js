console.log('hello world')
const express = require('express')
const bodyParser = require('body-parser')// process json data very easily
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())// a server can be hosted on a different domain (can be hit from all the world)

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

app.listen(process.env.PORT || 8081)
