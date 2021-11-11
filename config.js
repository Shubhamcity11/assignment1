require('dotenv').config()
const env = process.env.NODE_ENV;

const config = {
    'dev': {
        'db': {
            host: process.env.DEV_HOST,
            port: process.env.DEV_PORT,
            dbname: process.env.DEV_DBNAME,
            user: process.env.DEV_USER,
            pass: process.env.DEV_PASS,
        }
    },
    'prod':{
        'db': {
            host: process.env.PROD_HOST,
            port: process.env.PROD_PORT,
            dbname: process.env.PROD_DBNAME,
            user: process.env.PROD_USER,
            pass: process.env.PROD_PASS,
        }
    }
}

module.exports = config[env];