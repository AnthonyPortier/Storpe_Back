'use strict'

const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) =>{
    const Pronostic = Sequelize.define('pronostic', {
        user_pronostic:{
            type: DataTypes.INT
        },
        odd_defined:{
            type: DataTypes.STRING
        },
        resultat_pronostic:{
            type: DataTypes.INT
        }
    });

    Pronostic.associate = function (models) {

    }
    return Pronostic;
};