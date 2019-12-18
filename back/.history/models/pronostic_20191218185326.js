'use strict'

const Sequelize = require('sequelize')

const Pronostic = Sequelize.define('pronostic', {
    user_pronostic:{
        type: DataTypes.INT
    },
    odd_defined:{
        type: DataTypes.STRING
    }
})