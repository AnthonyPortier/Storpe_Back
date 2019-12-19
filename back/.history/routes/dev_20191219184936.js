const models = require('../models')
const faker = require('faker')

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
    app.delete('/match/:id', (req, res) => {
        models
            .Match
            .destroy({
                where: {
                    id: req.params.id
                }
            })
    })

    //get all pronostic
    app.get('/user/pronostic', (req, res) => {
        models
            .Pronostic
            .findAll()
            .then(x => res.json(x))
    })

    //faker routes post user
    app.post('/faker/user', (req, res) => {
        models
            .User
            .bulkCreate([{
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    daily_bet: faker.random.number(),
                    email: faker.internet.email(),
                    pseudo: faker.internet.userName(),
                    password: faker.internet.password()
                },
                {
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    daily_bet: faker.random.number(),
                    email: faker.internet.email(),
                    pseudo: faker.internet.userName(),
                    password: faker.internet.password()
                },
                {
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    daily_bet: faker.random.number(),
                    email: faker.internet.email(),
                    pseudo: faker.internet.userName(),
                    password: faker.internet.password()
                },
                {
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    daily_bet: faker.random.number(),
                    email: faker.internet.email(),
                    pseudo: faker.internet.userName(),
                    password: faker.internet.password()
                },
                {
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    daily_bet: faker.random.number(),
                    email: faker.internet.email(),
                    pseudo: faker.internet.userName(),
                    password: faker.internet.password()
                },
                {
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    daily_bet: faker.random.number(),
                    email: faker.internet.email(),
                    pseudo: faker.internet.userName(),
                    password: faker.internet.password()
                },
                {
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    daily_bet: faker.random.number(),
                    email: faker.internet.email(),
                    pseudo: faker.internet.userName(),
                    password: faker.internet.password()
                },
                {
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    daily_bet: faker.random.number(),
                    email: faker.internet.email(),
                    pseudo: faker.internet.userName(),
                    password: faker.internet.password()
                },
                {
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    daily_bet: faker.random.number(),
                    email: faker.internet.email(),
                    pseudo: faker.internet.userName(),
                    password: faker.internet.password()
                },
                {
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    daily_bet: faker.random.number(),
                    email: faker.internet.email(),
                    pseudo: faker.internet.userName(),
                    password: faker.internet.password()
                },
                {
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    daily_bet: faker.random.number(),
                    email: faker.internet.email(),
                    pseudo: faker.internet.userName(),
                    password: faker.internet.password()
                },
                {
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    daily_bet: faker.random.number(),
                    email: faker.internet.email(),
                    pseudo: faker.internet.userName(),
                    password: faker.internet.password()
                },
                {
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    daily_bet: faker.random.number(),
                    email: faker.internet.email(),
                    pseudo: faker.internet.userName(),
                    password: faker.internet.password()
                },
                {
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    daily_bet: faker.random.number(),
                    email: faker.internet.email(),
                    pseudo: faker.internet.userName(),
                    password: faker.internet.password()
                }
            ])
            .then(x => res.json(x))
    })

    //create match
    app.post('/match', (req, res) => {
        models
            .Match
            .create([{
                homeTeam: OM
                awayTeam: Nice
                odd_home: 1
                odd_draw: 2
                odd_away: 3
                logo_homeTeam:'https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/806px-Logo_Olympique_de_Marseille.svg.png'
                logo_awayTeam: "https://cdn.1min30.com/wp-content/uploads/2018/08/logo-Nice.png"
                result_match: 1
}