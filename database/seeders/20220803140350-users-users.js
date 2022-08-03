'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: "nombre1",
        lastName: "usuario admin",
        email: "usuarioadmin@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre2",
        lastName: "usuario admin",
        email: "usuarioadmin@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre3",
        lastName: "usuario admin",
        email: "usuarioadmin@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre4",
        lastName: "usuario admin",
        email: "usuarioadmin@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre5",
        lastName: "usuario admin",
        email: "usuarioadmin@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre6",
        lastName: "usuario admin",
        email: "usuarioadmin@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre6",
        lastName: "usuario admin",
        email: "usuarioadmin@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre8",
        lastName: "usuario admin",
        email: "usuarioadmin@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre9",
        lastName: "usuario admin",
        email: "usuarioadmin@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre10",
        lastName: "usuario admin",
        email: "usuarioadmin@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre1",
        lastName: "usuario comun",
        email: "usuariocomun@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre2",
        lastName: "usuario comun",
        email: "usuariocomun@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre3",
        lastName: "usuario comun",
        email: "usuariocomun@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre4",
        lastName: "usuario comun",
        email: "usuariocomun@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre5",
        lastName: "usuario comun",
        email: "usuariocomun@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre6",
        lastName: "usuario comun",
        email: "usuariocomun@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre7",
        lastName: "usuario comun",
        email: "usuariocomun@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre8",
        lastName: "usuario comun",
        email: "usuariocomun@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre9",
        lastName: "usuario comun",
        email: "usuariocomun@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre10",
        lastName: "usuario comun",
        email: "usuariocomun@mail.com",
        password: "ABCD_efgh_1234",
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
