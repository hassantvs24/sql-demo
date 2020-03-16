'use strict';
module.exports = (sequelize, DataTypes) => {
  const DoctorLocation = sequelize.define('DoctorLocation', {
    location_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    contact: DataTypes.STRING
  }, {});
  DoctorLocation.associate = function(models) {
    DoctorLocation.belongsTo(models.Doctors, {
        foreignKey: 'doctor_id',
        as: 'doctor'
      });
    DoctorLocation.belongsTo(models.Locations, {
      foreignKey: 'location_id',
      as: 'location'
    });
  };
  return DoctorLocation;
}; 