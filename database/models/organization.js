'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Organization.hasMany(models.Slide, { foreignKey: 'organizationId' });
    }
  };
  Organization.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    welcomeText: DataTypes.STRING,
    aboutUsText: DataTypes.STRING
  }, {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: 'Organization',
  });
  return Organization;
};