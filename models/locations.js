'use strict';
module.exports = (sequelize, DataTypes) => {
  const Locations = sequelize.define('Locations', {
    name: DataTypes.STRING,
    division_id: DataTypes.INTEGER,
    district_id: DataTypes.INTEGER,
    upazilla_id: DataTypes.INTEGER,
    union_id: DataTypes.INTEGER,
    address: DataTypes.STRING
  }, {});
  Locations.associate = function(models) {
    // associations can be defined here
  };
  return Locations;
};