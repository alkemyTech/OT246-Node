const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
    static associate(models) {

    }
  }

  Contact.init({
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    message: DataTypes.STRING,
    deletedAt: DataTypes.DATE,
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'Contact',
  })
  return Contact
}
