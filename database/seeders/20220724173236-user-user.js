'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: "Ignacio",
      lastName: "Borraz",
      email: "ignacioborraz@hotmail.com",
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
