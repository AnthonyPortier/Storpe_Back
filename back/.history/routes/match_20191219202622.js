const models = require('../models')
const resultToPoints = require('../assets/assets')


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
    app.put('/match', (req, res) => {
        models
            .Match
            .update({
                result_match: req.body.result
            }, {
                where: {
                    id: req.body.id
                }
            })
            .then(e => {
                models
                    .Pronostic
                    .update({
                        resultat_pronostic: req.body.result
                    }, {
                        where: {
                            matchId: req.body.id
                        }
                    })
                    .then(d => {
                    models
                    .Pronostic
                    .findAll({
                        where:
                        {
                            matchId:req.body.id
                        }
                    })
                    .then(x => {
                        console.log("Hello there")
                        res.json(x)
                        x.map(prono => {
                            const win = prono.user_pronostic === prono.resultat_pronostic
                            const changeScore = resultToPoints(prono.odd_defined, win)
                            models
                                .User
                                .increment(
                                    ['score'], {
                                        by: changeScore,
                                        where: {
                                            id: 1
                                        }
                                    }
                                )
                                .then( e => res.send(e))
                        })
                    })
                })
            })

    })
}