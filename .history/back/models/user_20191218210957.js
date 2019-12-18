'use strict'

const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define('User', {
        firstname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        score: {
            type: DataTypes.INT,
            allowNull: false
        },
        daily_bet:{
            type: DataTypes.INT,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        pseudo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    User.associate = function (models) {
        User.hasMany(models.Pronostic)
    }
    return User;
};