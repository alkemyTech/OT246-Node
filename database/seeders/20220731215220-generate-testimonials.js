'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Testimonials', [
      {
        name: 'Buena atencion',
        image:
          'https://static3.depositphotos.com/1000122/252/i/450/depositphotos_2527564-stock-photo-child-doing-school-homework.jpg',
        content:
          'Me gusto mucho la calidad de atencion y la profesionalidad con que abordaron a los chicos. ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Buena atencion',
        image:
          'https://static3.depositphotos.com/1000122/252/i/450/depositphotos_2527564-stock-photo-child-doing-school-homework.jpg',
        content:
          'Me gusto mucho la calidad de atencion y la profesionalidad con que abordaron a los chicos. ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Testimonials', null, {});
  },
};
