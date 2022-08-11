const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

// DONE - create a Restaurant model
const Restaurant = db.define('restaurant', {
    name: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING

    },
    cuisine: {
        type: DataTypes.STRING
    },
})

async function main(){
    await Restaurant.sync()
    await Restaurant.create({
        name:'TGIFridays', 
        location:'London',
        cuisine:'American'
    })
}

// main()

module.exports = {Restaurant};