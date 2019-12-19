const models = require('../models')

module.exports = app => {

//get user by id
    app.get('/user/:id', (req, res) => {
        models
        .User
        .findByPk(req.params.id)
        .then(x => res.json(x))
    });

// create user
    app.post('/user', (req, res) => {
        models
        .User
        .create(req.body)
        .then(x => res.json(x))
        })
    });

//update user
    app
}