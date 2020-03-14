'use strict';
module.exports = (sequelize, DataTypes) => {
  const Upazilas = sequelize.define('Upazilas', {
    district_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    bn_name: DataTypes.STRING
  }, {});
  Upazilas.associate = function(models) {
    // associations can be defined here
  };
  return Upazilas;
};