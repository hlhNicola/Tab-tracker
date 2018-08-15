console.log('hello world')
const express = require('express')
const bodyParser = require('body-parser')// process json data very easily
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())// a server can be hosted on a different domain (can be hit from all the world)

require('./routes')(app)

sequelize.sync({force: true})
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
