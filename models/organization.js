'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {}

  Organization.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      welcomeText: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      aboutUsText: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Organization',
      paranoid: true,
    }
  );

  return Organization;
};
