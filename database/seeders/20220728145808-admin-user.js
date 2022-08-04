'use strict';
const { hash } = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [{
      firstName: "Tomas",
      lastName: "Contreras",
      email: "tomas@mail.com",
      password: await hash("123456Aa_", 10),
      photo: "https://typicode.com/user/1",
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: "Pepe",
      lastName: "Lopez",
      email: "pepe@mail.com",
      password: await hash("123456Aa_", 10),
      photo: "https://typicode.com/user/2",
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
