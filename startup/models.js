const Sequelize = require('sequelize');
const sequelize = require('./db')();

const DivisionModel = require('../models/division');
const DistrictModel = require('../models/districts');
const UpazillaModel = require('../models/upazilas');
const UnionModel = require('../models/unions');
const LocationModel = require('../models/locations');
const TagModel = require('../models/tags');
const DoctorModel = require('../models/doctors');
const DoctorLocationModel = require('../models/doctorlocation');
const UserModel = require('../models/users');


const Division = DivisionModel(sequelize, Sequelize);
const District = DistrictModel(sequelize, Sequelize);
const Upazilla = UpazillaModel(sequelize, Sequelize);
const Union = UnionModel(sequelize, Sequelize);
const Location = LocationModel(sequelize, Sequelize);
const Tag = TagModel(sequelize, Sequelize);
const Doctor = DoctorModel(sequelize, Sequelize);
const DoctorLocation = DoctorLocationModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);


exports.Division = Division;
exports.District = District;
exports.Upazilla = Upazilla;
exports.Union = Union;
exports.Location = Location;
exports.Tag = Tag;
exports.Doctor = Doctor;
exports.DoctorLocation = DoctorLocation;
exports.User = User;