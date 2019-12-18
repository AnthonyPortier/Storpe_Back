'use strict'

const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Match = sequelize.define('Match', {
        equipe_1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        equipe_2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        odd: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        resultat_match: {
            type: DataTypes.INTEGER,
        }
    },{
        underscored: true
    });

    Match.associate = function (models) {
    }
    return Match;
};