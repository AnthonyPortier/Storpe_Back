const models = require('../models')

module.exports = app => {
//get user by id
    app.get('/user/:id', (req, res) => {
        models
        .user
        .findByPk(req.params.id)
        .then(x => res.json(x))
    })

// create user
    app.post('/user', (req, res) => {
        models
        .user
        .create(req.body)
        .then(newUser => {
            newUser.addUser(req.body.userId)
            res.json(newUser)
        })
    })

//update user
    app
}