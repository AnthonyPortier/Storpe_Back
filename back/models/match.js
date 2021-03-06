'use strict'

const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    const Match = sequelize.define('Match', {
        homeTeam: {
            type: DataTypes.STRING,
            allowNull: false
        },
        awayTeam: {
            type: DataTypes.STRING,
            allowNull: false
        },
        odd_home: {
            type: DataTypes.STRING,
            allowNull: false
        },
        odd_draw: {
            type: DataTypes.STRING,
            allowNull: false
        },
        odd_away: {
            type: DataTypes.STRING,
            allowNull: false
        },
        logo_homeTeam: {
            type: DataTypes.STRING,
            allowNull: false
        },
        logo_awayTeam: {
            type: DataTypes.STRING,
            allowNull: false
        },
        result_match: {
            type: DataTypes.INTEGER,
        }
    },{
        underscored: true
    });

    Match.associate = function (models) {
    }
    return Match;
};