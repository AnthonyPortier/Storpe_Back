const express = require('express')
const cors = require('cors')
const app = express()
const port = 3007
const helloWorld= require('./tester')
const goodByeWorld = require('./testerSimplified')
app.use(cors())
app.use(express.json())

app.get('/helloworld',(req,res) => {
    res.send(helloWorld)
})
app.get('/goodbyeworld',(req, res) => {
    res.send(goodByeWorld)
})

app.listen(port, () => console.log('Connected to the MATRICE'))