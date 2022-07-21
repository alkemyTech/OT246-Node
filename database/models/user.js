'use strict';
const {
  Model
} = require('sequelize');
const { hash } = require('bcrypt');

const SALT_ROUNDS = 10;

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, { foreignKey: 'roleId' });
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    photo: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    deletedAt: DataTypes.STRING
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'User',
  });

  User.beforeSave(async (user) => {
    if (user.changed('password')) {
      const hashedPassword = await hash(user.password, SALT_ROUNDS);

      user.password = hashedPassword;
    }
  })

  return User;
};