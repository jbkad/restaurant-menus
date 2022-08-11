const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

// DONE - connect to db via sequelize
const db = new Sequelize({
    dialect: 'sqlite',
    storage: './data.sqlite'
})

module.exports = {
    db
};
