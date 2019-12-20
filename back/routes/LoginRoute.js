const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const LoginRoute = express.Router()


const models = require('../models')
LoginRoute.use(cors())

process.env.SECRET_KEY = 'secret'


LoginRoute.post('/register', (req, res) => {

    const userData = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password: req.body.password,
       
    }

    models.User.findOne({
        where : {
            email : req.body.email
        }
    })
    .then(user => {
        if(!user){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                models.User.create(userData)
                .then(user => {
                    res.json({status : user.email + ' Registered'})
                })
                .catch(err => res.send(err))
            })
        }
        else{
            res.json('User already exists')
        }
    })
    .catch(err => console.log(err))
})


LoginRoute.post('/login', (req, res) => {

    
    models.User.findOne({
        where : {
            email : req.body.email
        }
    })
    .then(user => {
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY)
                res.send(token)
            }
        }
        else{
            res.send('User does not exists')
        }
    })
    .catch(err => res.send(err))
})

module.exports = LoginRoute