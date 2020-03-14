'use strict';
module.exports = (sequelize, DataTypes) => {
  const Unions = sequelize.define('Unions', {
    upazilla_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    bn_name: DataTypes.STRING
  }, {});
  Unions.associate = function(models) {
    // associations can be defined here
  };
  return Unions;
};