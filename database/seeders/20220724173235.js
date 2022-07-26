'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: "Martin",
      lastName: "Kamper",
      email: "martinkamper@gmail.com",
      password: "abcDEF123123321_",
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',null,{})
  }
};
