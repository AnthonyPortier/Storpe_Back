const models = require('../models')

module.exports = app => {

//get user by id
    app.get('/user/profil/:id', (req, res) => {
        models
        .User
        .findByPk(req.params.id)
        .then(x => res.json(x))
    })

// create user
    app.post('/user/profil', (req, res) => {
        models
        .User
        .create(req.body)
        .then(x => res.json(x))
        })
    }

//update user
    app.put('/user/profil/:id', (req, res) => {

    })
}