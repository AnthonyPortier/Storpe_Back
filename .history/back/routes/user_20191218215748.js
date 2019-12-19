const models = require('../models')

module.exports = app => {

//get user by id
    app.get('/user/profile/:id', (req, res) => {
        models
        .User
        .findByPk(req.params.id)
        .then(x => res.json(x))
    })

// create user
    app.post('/user/profile', (req, res) => {
        models
        .User
        .create(req.body)
        .then(x => res.json(x))
        })

//update user
    app.put('/user/profile/:id', (req, res) => {
        models
        .User
        .update(req.body, {
            where:{
                id: req.params.id
            }
        })
    })
}