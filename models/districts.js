'use strict';
module.exports = (sequelize, DataTypes) => {
  const Districts = sequelize.define('Districts', {
    division_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    bn_name: DataTypes.STRING
  }, {});
  Districts.associate = function(models) {
    // associations can be defined here
  };
  return Districts;
};