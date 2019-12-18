const models = require('../models')

module.exports = app => {
// get all users
app.get('/user', (req, res) =>{
    models
    .User
    .findAll()
    .then(x => {res.json(x)})
})
};