'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Members', [{
      name: 'Jose',
      image: "https://jsonplaceholder.typicode.com/photos/1",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Juan",
      image: "https://jsonplaceholder.typicode.com/photos/2",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Corey",
      image: "https://jsonplaceholder.typicode.com/photos/3",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "James",
      image: "https://jsonplaceholder.typicode.com/photos/4",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Members', null, {});
  }
};
