const {Sequelize} = require('sequelize');
const {config} = require('../config/config');
const {setupModels} = require('../models/index');
const pass = encodeURIComponent(config.password);
const user = decodeURIComponent(config.user_db);

const URL = `postgres://${user}:${pass}@localhost:${config.port_db}/${config.name_db}`;

const sequelize = new Sequelize(URL, {
    dialect: 'postgres',
    logging: false
})

setupModels(sequelize)


module.exports = {sequelize}
