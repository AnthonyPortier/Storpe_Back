const models = require('../models')

module.exports = app => {
    // get all users
app.get('/user', (req, res) => {
    models
    .User
    .findAll({
        where:{userId:req.body.id}
    })
    .then(x => res.json(x))
})
}