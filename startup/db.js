require('dotenv').config();
const envs = process.env.NODE_ENV;
const config = require('../config/config.json');
const {username, password, database, host, dialect} = config[envs];
const Sequelize = require('sequelize');

  module.exports = function (){
    const sequelize = new Sequelize(database, username, password, {
            host: host,
            dialect: dialect,
            timezone: process.env.TZ
  });

  return sequelize;
       
}