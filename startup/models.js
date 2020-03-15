const Sequelize = require('sequelize');
const sequelize = require('./db')();

const DivisionModel = require('../models/division');
const LocationModel = require('../models/locations');
const TagModel = require('../models/tags');
const DoctorModel = require('../models/doctors');
const DoctorLocationModel = require('../models/doctorlocation');


const Division = DivisionModel(sequelize, Sequelize);
const Location = LocationModel(sequelize, Sequelize);
const Tag = TagModel(sequelize, Sequelize);
const Doctor = DoctorModel(sequelize, Sequelize);
const DoctorLocation = DoctorLocationModel(sequelize, Sequelize);


exports.Division = Division;
exports.Location = Location;
exports.Tag = Tag;
exports.Doctor = Doctor;
exports.DoctorLocation = DoctorLocation;