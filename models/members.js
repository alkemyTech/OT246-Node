'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Member extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Member.init({

        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        description: DataTypes.STRING,
        facebookUrl: DataTypes.STRING,
        instagramUrl: DataTypes.STRING,
        linkedinUrl: DataTypes.STRING,
        image: { type: DataTypes.STRING, allowNull: false },

    }, {
        sequelize,
        modelName: 'Member',
        paranoid: true
    });
    return Member;
};