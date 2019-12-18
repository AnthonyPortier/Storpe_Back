'use strict'

const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) =>{
    const Match = Sequelize.define('match', {
        equipe_1:{
            type: DataTypes.STRING
        },
        equipe_2:{
        type: DataTypes.STRING
        },
        cote1:{
            type: DataTypes.INT
        },
        cote2:{
            type: DataTypes.INTs
        },
        resultat_match:{
            type: DataTypes.INT
        }   
    });
    Match.associate = function (models) {
        Match.belongsToMany(models.Pronostic)
    }
    return Match;
};