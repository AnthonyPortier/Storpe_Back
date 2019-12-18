const express = require('express')
const app = express()
const sequelize = require('sequelize')

const router = app => { 
    require('./routes/dev')(app)
}