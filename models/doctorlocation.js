'use strict';
module.exports = (sequelize, DataTypes) => {
  const DoctorLocation = sequelize.define('DoctorLocation', {
    location_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    contact: DataTypes.STRING
  }, {});
  DoctorLocation.associate = function(models) {
    // associations can be defined here
  };
  return DoctorLocation;
};