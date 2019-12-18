'use strict'

const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) =>{
    const Match = Sequelize.define('match', {
        equipe_1:{
            type: DataTypes.STRING,
            allowNull: false
        },
        equipe_2:{
            type: DataTypes.STRING,
            allowNull: false
        },
        cote1:{
            type: DataTypes.INT,
            allowNull: false
        },
        cote2:{
            type: DataTypes.INT,
            allowNull: false
        },
        resultat_match:{
            type: DataTypes.INT,
            allowNull: false
        }   
    });
    Match.associate = function (models) {
        Match.belongsToMany(models.Pronostic)
    }
    return Match;
};