const models = require('../models')

module.exports = app => {
    // get all users
    app.get('/user', (req, res) => {
        models
            .User
            .findAll()
            .then(x => {
                res.json(x)
            })
    })

    // create match
    app.post('/match', (req, res) => {
        models
        .Match
        .create(req.body)
        .then(x => res.json(x))
    })

// delete match
    app.delete('/match/:id', (req,res) =>{
        models
        .Match
        .destroy({
            where: {id: req.params.id}
        })
    })

    //get all pronostic
    app.get('/user/pronostic', (req, res) => {
        models
        .Pronostic
        .findAll()
        .then(x => res.json(x))
    })
}