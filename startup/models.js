const Sequelize = require('sequelize');
const sequelize = require('./db')();

const DivisionModel = require('../models/division');



const Division = DivisionModel(sequelize, Sequelize);

//Nazmul

exports.Division = Division;