'use strict'

const Sequelize = require('sequelize')
const User = sequelize.define('User', {
    firstname:{
        type: DataTypes.STRING,
    },
    lastname:{
        type: DataTypes.STRING,
    },
    score: {
        type: DataTypes.INT,
    },
    daily_bet: {
        type: DataTypes.INT,
    },
    email:{
        type: DataTypes.STRING,
    },
    pseudo:{
        type: DataTypes.STRING,
    },
    password:{
        type: DataTypes.STRING
    }
})