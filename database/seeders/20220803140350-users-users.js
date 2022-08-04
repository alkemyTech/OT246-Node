'use strict';
const { hash } = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: "nombre1",
        lastName: "usuario admin",
        email: "usuarioadmin1@mail.com",
        password: await hash("ABCZ_efgi_1230", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre2",
        lastName: "usuario admin",
        email: "usuarioadmin2@mail.com",
        password: await hash("ABCZ_efgi_1230", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre3",
        lastName: "usuario admin",
        email: "usuarioadmin3@mail.com",
        password: await hash("ABCZ_efgi_1230", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre4",
        lastName: "usuario admin",
        email: "usuarioadmin4@mail.com",
        password: await hash("ABCZ_efgi_1230", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre5",
        lastName: "usuario admin",
        email: "usuarioadmin5@mail.com",
        password: await hash("ABCZ_efgi_1230", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre6",
        lastName: "usuario admin",
        email: "usuarioadmin6@mail.com",
        password: await hash("ABCZ_efgi_1230", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre6",
        lastName: "usuario admin",
        email: "usuarioadmin7@mail.com",
        password: await hash("ABCZ_efgi_1230", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre8",
        lastName: "usuario admin",
        email: "usuarioadmin8@mail.com",
        password: await hash("ABCZ_efgi_1230", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre9",
        lastName: "usuario admin",
        email: "usuarioadmin9@mail.com",
        password: await hash("ABCZ_efgi_1230", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre10",
        lastName: "usuario admin",
        email: "usuarioadmin10@mail.com",
        password: await hash("ABCZ_efgi_1230", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre1",
        lastName: "usuario comun",
        email: "usuariocomun1@mail.com",
        password: await hash("ABCD_efgh_1234", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre2",
        lastName: "usuario comun",
        email: "usuariocomun2@mail.com",
        password: await hash("ABCD_efgh_1234", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre3",
        lastName: "usuario comun",
        email: "usuariocomun3@mail.com",
        password: await hash("ABCD_efgh_1234", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre4",
        lastName: "usuario comun",
        email: "usuariocomun4@mail.com",
        password: await hash("ABCD_efgh_1234", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre5",
        lastName: "usuario comun",
        email: "usuariocomun5@mail.com",
        password: await hash("ABCD_efgh_1234", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre6",
        lastName: "usuario comun",
        email: "usuariocomun6@mail.com",
        password: await hash("ABCD_efgh_1234", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre7",
        lastName: "usuario comun",
        email: "usuariocomun7@mail.com",
        password: await hash("ABCD_efgh_1234", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre8",
        lastName: "usuario comun",
        email: "usuariocomun8@mail.com",
        password: await hash("ABCD_efgh_1234", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre9",
        lastName: "usuario comun",
        email: "usuariocomun9@mail.com",
        password: await hash("ABCD_efgh_1234", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "nombre10",
        lastName: "usuario comun",
        email: "usuariocomun10@mail.com",
        password: await hash("ABCD_efgh_1234", 10),
        photo: "https://thumbs.dreamstime.com/b/icono-en-estilo-plano-de-la-persona-del-usuario-para-el-sitio-web-ejemplo-vector-131140097.jpg",
        roleId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {
      validate: true, 
      individualHooks: true,
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
