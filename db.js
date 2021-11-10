const Sequelize = require('sequelize');
 const {db} = require("./config");

 const conn = new Sequelize(db.dbname, db.user, db.pass, {
    host: db.host,
    port: db.port,
    dialect: 'postgres',
    logging: false
});

module.exports = conn; 