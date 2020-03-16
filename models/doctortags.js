'use strict';
module.exports = (sequelize, DataTypes) => {
  const DoctorTags = sequelize.define('DoctorTags', {
    tag_id: DataTypes.INTEGER,
    doctor_id: DataTypes.INTEGER
  }, {});
  DoctorTags.associate = function(models) {
    // associations can be defined here
  };
  return DoctorTags;
};