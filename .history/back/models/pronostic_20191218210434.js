'use strict'

const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) =>{
    const Pronostic = Sequelize.define('pronostic', {
        user_pronostic:{
            type: DataTypes.INT,
            allowNull: false
        },
        odd_defined:{
            type: DataTypes.STRING,
            allowNull: false
        },
        resultat_pronostic:{
            type: DataTypes.INT,
            allowNull: true
        }
    });

    Pronostic.associate = function (models) {
        Pronostic.belongsTo(models.User)
    }
    return Pronostic;
};