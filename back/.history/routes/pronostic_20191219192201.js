const models = require('../models')

module.exports = app => {
    // get all users
app.get('/mypronostics', (req, res) => {
    models
    .Pronostic
    .findAll({
        where:{userId:req.body.id}
    })
    .then(x => res.json(x))
})
}