'use strict';
module.exports = (sequelize, DataTypes) => {
  const Doctors = sequelize.define('Doctors', {
    name: DataTypes.STRING,
    designation: DataTypes.STRING,
    gender: DataTypes.STRING,
    tags: DataTypes.TEXT,
    description: DataTypes.TEXT,
    photo: DataTypes.STRING,
    note: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    user_rating: DataTypes.INTEGER
  }, {});
  Doctors.associate = function(models) {
    // associations can be defined here
  };
  return Doctors;
};