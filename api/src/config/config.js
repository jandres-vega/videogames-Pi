require('dotenv').config();

const config = {
    port: process.env.PORT,
    port_db: process.env.PORT_DB,
    user_db: process.env.USER_DB,
    name_db: process.env.NAME_DB,
    password: process.env.PASSWORD,
    key: process.env.KEY
}

module.exports = {config}