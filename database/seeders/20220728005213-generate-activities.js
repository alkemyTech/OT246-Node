'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Activities', [
      {
        name: 'Actividades con los más jóvenes',
        image:
          'https://static3.depositphotos.com/1000122/252/i/450/depositphotos_2527564-stock-photo-child-doing-school-homework.jpg',
        content:
          'Haremos un abordaje de nivel inicial para los niños que se encuentran en el nivel primario, en las materias de matemáticas, lengua y ciencias sociales.',
      },
      {
        name: 'Actividades los adultos mayores',
        image:
          'https://www.viveplenitud.com.ar/-/media/vivaplenitud/images/articles/envejecimiento-activo.jpg',
        content:
          'Salida recreativa con los adultos mayores, para que puedan disfrutar de una experiencia de relajación y descanso.',
      },
      {
        name: 'Comedor nocturno',
        image: 'https://www.prisma.org.pe/wp-content/uploads/PORTADA-COSUDE-800x480.jpg',
        content: 'Comedor nocturno para los niños y adultos mayores.',
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Activities', null, {});
     
  },
};
