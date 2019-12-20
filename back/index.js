const express = require('express')
const models = require('./models')
const bodyParser= require('body-parser')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const LoginRoute = require('./routes/LoginRoute')
app.use('/LoginRoute', LoginRoute)

    require('./routes/dev')(app)
    require('./routes/user')(app)
    require('./routes/match')(app)
    require('./routes/pronostic')(app)

models
    .sequelize
    .sync()
    .then(() => app.listen(port, () => console.log(`App listening on port ${port}`)))