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
    Locations.belongsTo(models.Division, {
      foreignKey: 'division_id',
      as: 'division'
    });
    Locations.belongsTo(models.Districts, {
      foreignKey: 'district_id',
      as: 'district'
    });
    Locations.belongsTo(models.Upazilas, {
      foreignKey: 'upazilla_id',
      as: 'upazilla'
    });
    Locations.belongsTo(models.Unions, {
      foreignKey: 'union_id',
      as: 'union'
    });
  };
  return Locations;
};