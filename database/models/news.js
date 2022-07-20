const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      News.belongsTo(models.Category, { foreignKey: 'categoryId' })
    }
  }
  News.init({
    name: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'News',
  })
  return News
}
