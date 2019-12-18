const express = require('express')
const models = require('./models')
const bodyParser= require('body-parser')
const cors = require('cors')
const app = express()
const sequelize = require('sequelize')
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


    require('./routes/dev')(app)
    require('./routes/user')(app)




models
    .sequelize
    .sync()
    .then(() => app.listen(port, () => console.log(`App listening on port ${port}`)))