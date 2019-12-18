'use strict'

const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) =>{
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
    });
    User.associate = function (models) {
        User.hasMany(models.Pronostic)
    }
    return User;
};