const Sequelize = require('sequelize');
 const {db} = require("./config");

 const conn = new Sequelize(db.dbname, db.user, db.pass, {
    host: db.host,
    port: db.port,
    dialect: 'postgres',
//     dialectOptions: {  for heroku posgres
//         ssl: {
//             require: true, 
//             rejectUnauthorized: false 
//         }
//     },
    logging: false
});

module.exports = conn; 
