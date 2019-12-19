const models = require('../models')

module.exports = app => {
    // get all pronostic
    app.get('/mypronostics', (req, res) => {
        models
            .Pronostic
            .findAll()
            .then(x => res.json(x))
    })

    app.post('/mypronostics', (req, res) => {
        models
        .Pronostic
        .create(req.body)
        .then(x => res.json(x))
    }
    )
}