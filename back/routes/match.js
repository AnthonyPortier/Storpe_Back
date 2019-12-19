const models = require('../models')

module.exports = app => {

    // get all match
    app.get('/match', (req, res) => {
        models
            .Match
            .findAll()
            .then(x => res.json(x))
    })

    //get match by id
    app.get('/match/:id', (req, res) => {
        models
        .Match
        .findByPk(req.params.id)
        .then(x => res.json(x))
    })

    //update match
    app.put('/match/:id', (req, res) => {
        models
        .Match
        .update(req.body, {
            where:{
                id: req.params.id
            }
        })
        .then(x => res.json(x))
    })
}