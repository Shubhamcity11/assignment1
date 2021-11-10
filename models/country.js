const Sequelize = require('sequelize'),
      db        = require('../db');

const Country = db.define('country', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    native: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    continent: {
        type: Sequelize.STRING,
        allowNull: false
    },
    capital: {
        type: Sequelize.STRING,
        allowNull: false
    },
    currency: {
        type: Sequelize.STRING,
        allowNull: false
    },
    languages: {
        type:Sequelize.JSON,
        allowNull: false
    }
},
{
    updatedAt: false,
    createdAt: false
})

module.exports = Country;